import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://funakpo-compute.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Funakpo Compute — Ship faster at the edge",
    template: "%s · Funakpo Compute",
  },
  description:
    "Funakpo Compute is the edge deployment platform that turns any website into globally distributed compute. Deploy in seconds, scale to millions, pay only for what you use.",
  keywords: [
    "edge compute",
    "deployment platform",
    "serverless",
    "CDN",
    "web hosting",
    "Funakpo Compute",
  ],
  authors: [{ name: "Funakpo" }],
  creator: "Funakpo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Funakpo Compute",
    title: "Funakpo Compute — Ship faster at the edge",
    description:
      "Turn any website into globally distributed compute. Deploy in seconds, scale to millions, pay only for what you use.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Funakpo Compute — Ship faster at the edge",
    description:
      "Turn any website into globally distributed compute. Deploy in seconds, scale to millions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
