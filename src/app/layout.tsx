import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Menux — Contactless QR Menu & Ordering System",
  description:
    "Menux is a smart, contactless QR menu and ordering platform for restaurants. Customers scan, browse, and order — all from their phone.",
  metadataBase: new URL("https://menux.digital"),
  keywords: [
    "QR menu",
    "Restaurant ordering system",
    "Contactless ordering",
    "Digital menu",
    "Menux",
    "Smart restaurant solution",
  ],
  openGraph: {
    title: "Menux — QR Ordering for Restaurants",
    description:
      "Skip the lines. Scan, browse, and order — Menux makes dining seamless.",
    url: "https://menux.digital",
    siteName: "Menux",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Menux QR Ordering System",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menux — QR Menu & Ordering System",
    description:
      "Let customers scan, order, and get notified in real time — no app download needed.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <Toaster richColors expand />
        <Footer />
      </body>
    </html>
  );
}
