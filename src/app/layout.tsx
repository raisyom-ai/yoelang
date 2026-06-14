import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { PWARegister } from "@/components/providers/pwa-register";
import { PWAInstallBanner } from "@/components/providers/pwa-install";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXTAUTH_URL || "https://yoelang.vercel.app"
  ),
  title: "YOELANG - Learn English Premium",
  description: "YOELANG (YOEL ANGLAIS) - The premium English learning platform from A1 to C2. Learn with AI, interactive lessons, and personalized paths.",
  keywords: ["YOELANG", "YOEL ANGLAIS", "English learning", "language app", "EdTech", "A1 C2"],
  authors: [{ name: "YOELANG" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/yoelang-logo.png", sizes: "512x512" },
    ],
    apple: "/icons/apple-touch-icon-180x180.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "YOELANG",
  },
  openGraph: {
    type: "website",
    title: "YOELANG - Learn English Premium",
    description: "Apprenez l'anglais de A1 à C2 avec YOELANG. Tuteur IA, leçons interactives et certificats officiels.",
    siteName: "YOELANG",
    images: [{ url: "/yoelang-logo.png", width: 512, height: 512, alt: "YOELANG" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f1a" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <PWARegister />
          <PWAInstallBanner />
          <Toaster position="top-center" richColors duration={8000} />
        </ThemeProvider>
      </body>
    </html>
  );
}
