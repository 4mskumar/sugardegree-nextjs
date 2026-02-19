"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowBigLeft } from "lucide-react";

const faqs = [
  {
    q: "How can I upload my cake image?",
    a: (
      <>
        You can upload your handmade Bento Cake image on our upload page. Once
        uploaded, our team reviews and approves it before showing it in the
        public gallery.
        <br />
        👉{" "}
        <Link href="/upload" className="text-[#E8918B] underline font-medium">
          Upload your cake image here
        </Link>
      </>
    ),
  },
  {
    q: "How can I order a Bento Cake online?",
    a: (
      <>
        You can order your Bento Cake easily through food delivery platforms:
        <br />
        👉{" "}
        <a
          href="https://www.zomato.com"
          target="_blank"
          className="text-[#E8918B] underline"
        >
          Order on Zomato
        </a>{" "}
        |{" "}
        <a
          href="https://www.swiggy.com"
          target="_blank"
          className="text-[#E8918B] underline"
        >
          Order on Swiggy
        </a>
      </>
    ),
  },
  {
    q: "How much does one Bento Cake weigh?",
    a: (
      <>
        Each Bento Cake weighs approximately <strong>300 grams</strong>. It is
        perfect for one or two people and ideal for birthdays, surprises, and
        small celebrations.
      </>
    ),
  },
  {
    q: "When will my uploaded cake image appear in the gallery?",
    a: (
      <>
        After uploading your image, it goes through a short approval process by
        our admin team. Once approved, your cake image will be visible in our
        public Bento Cake Gallery for everyone to explore and get inspired.
      </>
    ),
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white relative px-4 py-10 flex flex-col items-center">
      {/* HERO */}
      <Link href="/" className="mb-6 absolute left-4 top-4 text-gray-600 hover:text-gray-800 transition">
      <ArrowBigLeft />
      </Link>
      <section className="max-w-3xl text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#E8918B] mb-3">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Welcome to SugarDegree FAQ. Here you’ll find answers about Bento
          Cakes, how to upload your cake images, how to order DIY Bento Cakes
          online, and everything you need to know about our cake gallery and
          services.
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="w-full max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border rounded-2xl shadow-sm overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-5 py-4 bg-[#A5CFC8]/20 text-left"
            >
              <span className="font-semibold text-gray-800 text-sm md:text-base">
                {faq.q}
              </span>
              <span className="text-[#E8918B] text-xl">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 py-4 text-gray-600 text-sm md:text-base bg-white"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-12 text-center">
        <p className="text-gray-600 mb-3">
          Ready to share your creativity or order your Bento Cake?
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/upload"
            className="px-6 py-2 rounded-full bg-[#E8918B] text-white hover:opacity-90 transition"
          >
            Upload Cake
          </Link>
          <a
            href="https://www.zomato.com"
            target="_blank"
            className="px-6 py-2 rounded-full bg-[#A5CFC8] text-black hover:opacity-90 transition"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  );
}
