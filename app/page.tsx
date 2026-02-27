import Gallery from "@/components/GallarClient";
import Menu from "@/components/MenuClient";

export const metadata = {
  title: "Cake Gallery | SugarDegree – Custom Bento Cakes",
  description: `Browse the SugarDegree Bento Cake Gallery to explore a wide collection of handmade, custom-designed DIY bento cakes created by our talented team and customers. This gallery showcases unique cake designs, creative themes, and personalized decorations perfect for birthdays, anniversaries, surprises, and special celebrations. Each bento cake displayed here represents our commitment to quality, creativity, and customer satisfaction.

Our gallery features 300g bento cakes crafted with premium ingredients and artistic designs that inspire customers to create their own custom cake ideas. From minimal aesthetic cakes to colorful and playful designs, SugarDegree offers a wide range of styles to suit every occasion. Customers can upload their own cake images, get them reviewed and approved by our team, and turn their ideas into delicious edible art.

This page helps users discover trending bento cake designs and understand the possibilities of customization. Whether you are looking for a DIY cake kit, a personalized cake gift, or a creative dessert concept, the SugarDegree Gallery provides inspiration for your next order.

You can conveniently order your favorite bento cake designs online through Zomato and Swiggy, ensuring fast delivery and freshness. Our gallery is optimized for easy browsing on both mobile and desktop devices, making it simple to explore cake designs anytime, anywhere. SugarDegree continues to grow as a trusted brand for custom bento cakes and DIY cake experiences in India.`,
  keywords: [
    "bento cake gallery",
    "custom cakes",
    "cake designs",
    "sugardegree",
    "DIY cake kit",
    "bento cakes near delhi",
    "birthday bento cakes in delhi",
    "birthday bento cakes",
    "bento cake delivery",
    "bento cake inspiration",
    "sugardegree bento cake",
    "sugardegree DIY cake kit",
    "affordable bento cakes in delhi",
    "sugardegree cakes in delhi",
  ],
  openGraph: {
    title: "Cake Gallery - SugarDegree",
    description: "Explore our creative bento cake gallery.",
    url: "https://sugardegree.in/gallery",
    images: ["/cake.png"],
  },
  icons: {
    icon: "/cake.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const page = () => {
  return (
    <div className="relative">
      <Gallery />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "SugarDegree Cake Gallery",
            url: "https://sugardegree.in/gallery",
          }),
        }}
      />
    </div>
  );
};

export default page;
