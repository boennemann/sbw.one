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
  description: "CTO. Munich, Germany.",
  metadataBase: new URL("https://sbw.one"),
  openGraph: {
    title: "Stephan Bönnemann-Walenta",
    description: "CTO. Munich, Germany.",
    url: "https://sbw.one",
    siteName: "sbw.one",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Stephan Bönnemann-Walenta",
    description: "CTO. Munich, Germany.",
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon-32x32.png?v=BG7043x7XQ",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-16x16.png?v=BG7043x7XQ",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/favicons/favicon.ico?v=BG7043x7XQ",
    apple: "/favicons/apple-touch-icon.png?v=BG7043x7XQ",
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.style.setProperty('--accent-hue',Math.floor(Math.random()*360))`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
