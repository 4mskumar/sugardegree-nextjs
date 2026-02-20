import UploadForm from "@/components/UploadForm";
import { ArrowBigLeft } from "lucide-react";

import Link from "next/link";

export const metadata = {
  title: "Upload Form | SugarDegree – Custom Bento Cakes",
  description:
    "Enter you details and upload your cake picture to share with the world. Join our creative community at SugarDegree and showcase your DIY bento cake designs. Upload now!",
  keywords: [
    "bento cake gallery",
    "custom cakes",
    "cake designs",
    "sugardegree",
    "DIY cake kit",
    "cake upload",
    "share cake photos",
    "creative cake community",
    'upload you cake',
    'sugardegree upload',
    'sugardegree ckae image upload',
    'sugardegree cake photo upload',
    'sugardegree upload form',
    'sugardegree form upload cake picture'
  ],
  openGraph: {
    title: "Sugardegree Upload Form - SugarDegree",
    description: "Upload your bento cake designs to share with the community.",
    url: "https://sugardegree.in/upload",
    images: ["/cake.png"],
  },
    robots: {
    index: true,
    follow: true,
  },
};


export default function Upload() {
  return (
    <div className="p-6 flex flex-col justify-center items-center bg-[#f7f2ea] overflow-hidden">
        <Link href={'/'}>
          <ArrowBigLeft fill="#ef4444" stroke="0" className="absolute top-3 left-3"/>
        </Link>
      <div className="flex items-center gap-2 justify-start">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          do the<span className="text-red-500"> deed</span>
        </h1>
      </div>
      <UploadForm />
    </div>
  );
}
