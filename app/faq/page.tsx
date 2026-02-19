import FaqPage from "@/components/Faq";

export const metadata = {
  title: "FAQs | SugarDegree – Custom Bento Cakes",
  description:
    "Find answers to common questions about SugarDegree's custom bento cakes. Learn about our cake designs, ordering process, and more.",
  keywords: [
    "bento cake faq",
    "custom cakes faq",
    "sugar degree query",
    "sugardegree",
    "DIY cake kit",
  ],
  openGraph: {
    title: "FAQs - SugarDegree",
    description: "Explore our frequently asked questions about SugarDegree's custom bento cakes.",
    url: "https://sugardegree.in/faq",
    images: ["/cake.png"],
  },
  icons: {
    icon: "/cake.png",
  },
};

const page = () => {
  return (
    <div>
        <FaqPage />
    </div>
  )
}

export default page