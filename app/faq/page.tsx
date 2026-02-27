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
        "birthday cakes delhi",
    "bento cake startup india",
    "custom cake experiences",
  ],
  openGraph: {
    title: "FAQs - SugarDegree",
    description: `Explore the complete Frequently Asked Questions (FAQ) section of SugarDegree, your trusted destination for creative and customizable DIY bento cakes. This page answers everything you need to know about ordering, pricing, cake size, image uploads, delivery options, and customization of our handmade bento cakes. Learn how to upload your cake design images easily, get approval from our team, and track your custom cake order with confidence.

        SugarDegree specializes in premium 300g bento cakes that are freshly baked, beautifully designed, and perfect for birthdays, anniversaries, celebrations, and gifting. Our FAQ page provides clear guidance on how to order bento cakes through popular food delivery platforms like Zomato and Swiggy, along with step-by-step instructions for placing custom orders.

Discover information about our cake ingredients, hygiene standards, preparation process, and delivery timelines. Whether you are ordering your first DIY cake or are a returning customer, this FAQ section ensures a smooth and hassle-free experience. We also address common questions about customization limits, image approval, pricing, and how long it takes for your cake design to be processed by our team.

This page is designed to help customers make informed decisions and enjoy a seamless online cake ordering experience. SugarDegree’s FAQ page is your one-stop resource for all questions related to custom bento cakes, DIY cake kits, and creative dessert solutions.`,
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
  );
};

export default page;
