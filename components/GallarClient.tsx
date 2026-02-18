"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skiper54 } from "@/components/ui/skiper-ui/skiper54";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [page, setPage] = useState(1);

  const route = useRouter();

  const loadImages = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/images/public?page=${page}&limit=6`);
      const data = await res.json();

      setImages((prev) => [...prev, ...data]); // append, not replace
      setPage((prev) => prev + 1);
    } catch (error) {
      console.log("Failed to load images", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const uniqueImages = Array.from(
    new Map(images.map((i) => [i._id, i])).values(),
  );

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col bg-white">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold tracking-tight text-[#E8918B]">
          sugar<span className="text-[#A5CFC8]">degree</span>°
        </h1>
      </div>

      {/* PICKS */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="h-[1px] flex-1 bg-gradient-to-r from-[#E8918B]/40 to-transparent" />
          <h2 className="text-sm md:text-base font-semibold uppercase tracking-widest text-zinc-500">
            Our Picks
          </h2>
          <span className="h-[1px] flex-1 bg-gradient-to-l from-[#A5CFC8]/40 to-transparent" />
        </div>

        <Skiper54 />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {uniqueImages.map((img, i) => (
          <motion.div
            key={img._id}
            onClick={() => setSelectedImage(img)}
            whileHover={{ scale: 1.03 }}
            className={`relative overflow-hidden rounded-3xl shadow-lg cursor-pointer group
              ${i % 6 === 0 ? "md:col-span-2 md:row-span-2" : ""}
              ${i % 5 === 0 ? "row-span-2" : ""}
            `}
          >
            <img
              src={img.imageUrl}
              alt="gallery"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />
          </motion.div>
        ))}

        {/* SKELETON */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-[180px] bg-gray-300/50 rounded-2xl animate-pulse"
            />
          ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-center mt-10">
        <Button disabled={loading} className="bg-red-500" onClick={loadImages}>
          {loading ? "Loading..." : "Load More"}
        </Button>
      </div>

      {/* FLOATING BUTTON */}
      <Link
        href="/upload"
        className="fixed bottom-8 right-6 w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center shadow-xl hover:bg-red-600 z-50"
      >
        <Plus size={26} />
      </Link>

      {/* MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage.imageUrl}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="max-w-[90%] max-h-[90%] rounded-3xl shadow-2xl border-4 border-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="mt-16 border-t border-gray-200 pt-8 pb-4 text-sm text-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">SugarDegree</h3>
            <p className="text-gray-500 text-sm">
              A community gallery for sharing creative moments and visual
              stories. Built with love for design & simplicity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li className="hover:text-black cursor-pointer">Home</li>
              <Link href="/upload">
                <li className="hover:text-black cursor-pointer">Upload</li>
              </Link>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-black cursor-pointer">
                Terms of Service
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
            <p>Email: support@sugardegree.com</p>
            <p>Instagram: @sugardegree.in</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SugarDegree. All rights reserved.</p>

          <button
            onClick={() => route.push("/login")}
            className="mt-2 md:mt-0 text-gray-400 hover:text-black transition"
          >
            Are you an admin?
          </button>
        </div>
      </footer>
    </div>
  );
}
