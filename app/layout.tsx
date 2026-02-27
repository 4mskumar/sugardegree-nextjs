import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Head from "next/head";
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
  title: "sugardegree",
  description:
    "sugardegree.in. Website of sugardegree which sells DIY bento boxes in which there is a cake to decorate and eat. Made by Aditya Kumar",
  icons: {
    icon: "/cake.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              name: "SugarDegree",
              url: "https://sugardegree.in",
              logo: "./cake.png",
              description:
                "DIY affordable bento cakes for birthdays, weddings and special occasions in Saket, Delhi which will make your celebrations extra special.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your street",
                addressLocality: "Your city",
                addressCountry: "IN",
              },
              sameAs: [
                "https://instagram.com/sugardegree.in",
                "https://facebook.com/sugardegree",
              ],
            }),
          }}
        />

        <link rel="icon" href="/cake.png" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased `}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}