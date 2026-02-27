import Link from "next/link";
import { motion } from "framer-motion";
import About from "@/components/ABoutCLient";

export const metadata = {
  title: "About SugarDegree | Affordable Bento Cakes in Saket, Delhi",
  description:
    "Learn about SugarDegree – a Delhi-based bento cake brand creating affordable, aesthetic cakes for birthdays, festivals, and everyday celebrations. We don’t just sell cakes, we sell experiences.",
  keywords: [
    "about sugardegree",
    "bento cakes delhi",
    "affordable bento cakes",
    "custom cakes saket",
    "sugardegree brand story",
    "birthday cakes delhi",
    "bento cake startup india",
    "custom cake experiences",
  ],
  openGraph: {
    title: "About SugarDegree – We Sell Experiences, Not Just Cakes",
    description:
      "SugarDegree was born in Saket, Delhi to make celebrations sweeter with affordable and aesthetic bento cakes.",
    url: "https://sugardegree.in/about",
    images: ["/cake.png"],
    type: "website",
  },
  icons: {
    icon: "/cake.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <About />
  );
}