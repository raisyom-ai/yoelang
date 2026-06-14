/**
 * Simple in-memory rate limiter for API endpoints.
 * 
 * Usage:
 *   const limiter = createRateLimiter({ windowMs: 60_000, maxRequests: 5 })
 *   if (!limiter.check(identifier)) return 429 response
 * 
 * In production, replace with Redis-backed store for multi-instance support.
 */

interface RateLimitEntry {
  count: number
  resetAt: number
}

interface RateLimitOptions {
  /** Time window in milliseconds (default: 60s) */
  windowMs: number
  /** Max requests per window (default: 5) */
  maxRequests: number
}

const store = new Map<string, RateLimitEntry>()

// Clean up expired entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now()
    for (const [key, entry] of store) {
      if (now > entry.resetAt) {
        store.delete(key)
      }
    }
  }, 5 * 60 * 1000)
}

export function createRateLimiter(options: Partial<RateLimitOptions> = {}) {
  const { windowMs = 60_000, maxRequests = 5 } = options

  return {
    /**
     * Check if the request is allowed.
     * Returns true if allowed, false if rate limited.
     */
    check(identifier: string): boolean {
      const now = Date.now()
      const entry = store.get(identifier)

      if (!entry || now > entry.resetAt) {
        // New window
        store.set(identifier, { count: 1, resetAt: now + windowMs })
        return true
      }

      if (entry.count >= maxRequests) {
        return false
      }

      entry.count++
      return true
    },

    /**
     * Get remaining requests for an identifier.
     */
    remaining(identifier: string): number {
      const now = Date.now()
      const entry = store.get(identifier)

      if (!entry || now > entry.resetAt) {
        return maxRequests
      }

      return Math.max(0, maxRequests - entry.count)
    },
  }
}

// ─── Pre-configured limiters ────────────────────────────────────────────────

/** Auth endpoints: 5 attempts per minute per IP */
export const authLimiter = createRateLimiter({ windowMs: 60_000, maxRequests: 5 })

/** Password reset: 3 attempts per 15 minutes per IP */
export const passwordResetLimiter = createRateLimiter({ windowMs: 15 * 60_000, maxRequests: 3 })

/** Chat API: 20 messages per minute per user */
export const chatLimiter = createRateLimiter({ windowMs: 60_000, maxRequests: 20 })

/** Payment initiate: 3 per minute per user */
export const paymentLimiter = createRateLimiter({ windowMs: 60_000, maxRequests: 3 })

/** Password change: 5 attempts per 15 minutes per IP */
export const passwordChangeLimiter = createRateLimiter({ windowMs: 15 * 60_000, maxRequests: 5 })

/** Avatar upload: 10 per minute per IP */
export const avatarUploadLimiter = createRateLimiter({ windowMs: 60_000, maxRequests: 10 })

/**
 * Get client IP from request headers.
 * Works behind reverse proxies (Caddy, Nginx, Cloudflare).
 */
export function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const realIP = req.headers.get('x-real-ip')
  if (realIP) {
    return realIP.trim()
  }
  return 'unknown'
}
