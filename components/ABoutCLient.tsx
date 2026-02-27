'use client'

import { ArrowBigLeft, Home } from "lucide-react"
import Link from "next/link"
import {motion} from'framer-motion'

export default function About() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#faf6ee] px-4 py-10 relative">

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 flex items-center text-red-400 left-6 text-sm font-medium hover:text-red-500 transition"
      >
        <Home className="text-red-400" />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 w-full max-w-md sm:max-w-xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">
            sugar<span className="text-red-500">degree</span>
          </h1>
          <p className="text-gray-500 mt-2">
            We don’t just sell cakes. We sell experiences. 🍰
          </p>
        </div>

        {/* Content */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base"
        >
          <p>
            SugarDegree was born in Saket, Delhi with one simple question — why should
            beautiful and memorable cakes be expensive?
          </p>

          <p>
            We noticed something missing. While bakeries were everywhere, there were
            hardly any offering stylish, aesthetic and affordable bento cakes for
            everyday celebrations like birthdays, festivals, and small personal
            moments.
          </p>

          <p>
            That gap became our inspiration. SugarDegree started with the goal of
            making celebrations sweeter without making them costly.
          </p>

          <p>
            Our bento cakes are more than desserts. They are crafted to match emotions
            — happiness, surprise, love and togetherness. Whether it’s a birthday, a
            festival or a small win in life, SugarDegree adds flavor to your moments.
          </p>

          <p>
            We believe cakes should not only taste good but feel special. That’s why
            we focus on quality ingredients, creative designs, and a smooth customer
            experience from order to delivery.
          </p>

          <p className="font-semibold text-center">
            At SugarDegree, we don’t sell products. We sell experiences — packed in a
            small box of joy.
          </p>
        </motion.section>

        {/* Why Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-pink-50 p-5 rounded-2xl"
        >
          <h2 className="text-lg font-semibold mb-3">Why SugarDegree?</h2>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>• Affordable and aesthetic bento cakes</li>
            <li>• Perfect for birthdays, festivals & special moments</li>
            <li>• Freshly baked with quality ingredients</li>
            <li>• Based in Saket, Delhi</li>
            <li>• Focused on customer happiness, not just sales</li>
          </ul>
        </motion.section>

        {/* Promise */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <h2 className="text-lg font-semibold mb-2">Our Promise</h2>
          <p className="text-gray-600 text-sm sm:text-base">
            SugarDegree exists to make every celebration better, sweeter, and more
            memorable — one bento cake at a time.
          </p>
        </motion.section>
      </motion.div>
    </main>
    )
}