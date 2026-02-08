import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stephan Bönnemann-Walenta",
  description: "Builder of Things — software products by trade, everything else by hand.",
  metadataBase: new URL("https://sbw.one"),
  openGraph: {
    title: "Stephan Bönnemann-Walenta",
    description: "Builder of Things — software products by trade, everything else by hand.",
    url: "https://sbw.one",
    siteName: "sbw.one",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephan Bönnemann-Walenta",
    description: "Builder of Things — software products by trade, everything else by hand.",
  },
  other: {
    "theme-color": "#050505",
  },
  icons: {
    icon: [
      {
        url: "/api/icon",
        type: "image/svg+xml",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.setProperty('--accent-hue',Math.floor(Math.random()*360))`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Stephan Bönnemann-Walenta",
              url: "https://sbw.one",
              jobTitle: "CTO",
              worksFor: {
                "@type": "Organization",
                name: "Liechtenstein Life | Prosperity",
                url: "https://liechtensteinlife.com",
              },
              sameAs: [
                "https://github.com/boennemann",
                "https://www.linkedin.com/in/boennemann/",
                "https://x.com/boennemann",
                "https://www.instagram.com/boennemann",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
