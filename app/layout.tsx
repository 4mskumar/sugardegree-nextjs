import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Script from "next/script";
import Menu from "@/components/MenuClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SugarDegree",
  description:
    "DIY affordable bento cakes for birthdays, weddings and special occasions in Saket, Delhi.",
  icons: {
    icon: "/cake.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased `}>
        
        {/* {children} */}
        <Toaster />

        {/* Schema */}
        <Script
          id="bakery-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "SugarDegree",
              url: "https://sugardegree.in",
              logo: "https://sugardegree.in/cake.png",
              description:
                "DIY affordable bento cakes for birthdays, weddings and special occasions in Saket, Delhi.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/sugardegree.in",
                "https://facebook.com/sugardegree",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}