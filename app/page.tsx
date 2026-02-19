import Gallery from "@/components/GallarClient";
import { icons } from "lucide-react";

export const metadata = {
  title: "Cake Gallery | SugarDegree – Custom Bento Cakes",
  description:
    "Browse our handmade bento cake gallery. Custom DIY cake designs by SugarDegree. Order creative cakes online.",
  keywords: [
    "bento cake gallery",
    "custom cakes",
    "cake designs",
    "sugardegree",
    "DIY cake kit",
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
};
const page = () => {
  return (
    <div>
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
