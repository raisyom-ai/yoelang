import { PrismaClient } from '@prisma/client'
import { PrismaLibSQL } from '@prisma/adapter-libsql'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createPrismaClient() {
  const libsqlUrl = process.env.LIBSQL_URL || process.env.TURSO_DATABASE_URL
  
  if (libsqlUrl) {
    const authToken = process.env.LIBSQL_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN || ''
    
    // PrismaLibSQL is a factory that takes a config object { url, authToken }
    const adapter = new PrismaLibSQL({
      url: libsqlUrl,
      authToken,
    })
    
    return new PrismaClient({ adapter })
  }

  // Local SQLite (development)
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : [],
  })
}

export const db = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
