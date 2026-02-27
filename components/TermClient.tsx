'use client'

import {motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function Term(){
    return (
        <main className="min-h-screen flex items-center justify-center bg-[#faf6ee] px-4 py-10 relative">

      {/* Back Button */}
      <Link
        href="/"
        className="absolute top-6 left-6 text-sm font-medium text-red-400 hover:text-red-500 transition"
      >
        <Home />
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white shadow-xl rounded-3xl p-6 sm:p-10 w-full max-w-md sm:max-w-3xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Terms & Conditions
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <section className="space-y-5 text-gray-700 text-sm sm:text-base leading-relaxed">

          <p>
            Welcome to SugarDegree. By accessing or using our website and services,
            you agree to comply with and be bound by the following Terms and Conditions.
            Please read them carefully before placing an order.
          </p>

          <h2 className="font-semibold">1. Orders & Customization</h2>
          <p>
            All cakes are freshly prepared based on customer orders. Custom designs,
            messages, and themes are subject to availability and approval by our team.
            Slight variations in color and design may occur.
          </p>

          <h2 className="font-semibold">2. Pricing & Payments</h2>
          <p>
            Prices are displayed on our website or partner platforms (Zomato, Swiggy).
            Full payment must be completed before order confirmation. We reserve the
            right to change prices without prior notice.
          </p>

          <h2 className="font-semibold">3. Cancellations & Refunds</h2>
          <p>
            Once an order is confirmed, cancellations may not be eligible for a refund.
            Refunds are provided only in case of order failure or product damage upon
            delivery, subject to review.
          </p>

          <h2 className="font-semibold">4. Delivery</h2>
          <p>
            Delivery timelines depend on location and third-party partners. SugarDegree
            is not responsible for delays caused by external delivery services or
            unforeseen circumstances.
          </p>

          <h2 className="font-semibold">5. Intellectual Property</h2>
          <p>
            All content, logos, images, and designs on this website are the property of
            SugarDegree. Unauthorized use or reproduction is prohibited.
          </p>

          <h2 className="font-semibold">6. User Responsibilities</h2>
          <p>
            Users agree not to upload offensive, illegal, or copyrighted content when
            submitting cake images or reviews. SugarDegree reserves the right to remove
            any such content.
          </p>

          <h2 className="font-semibold">7. Limitation of Liability</h2>
          <p>
            SugarDegree shall not be liable for any indirect or incidental damages
            arising from the use of our products or website services.
          </p>

          <h2 className="font-semibold">8. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions at any
            time without prior notice. Continued use of our services implies acceptance
            of the updated terms.
          </p>

          <h2 className="font-semibold">9. Contact Us</h2>
          <p>
            For any questions regarding these Terms & Conditions, please contact us at
            <span className="font-medium"> support@sugardegree.in</span>.
          </p>

        </section>
      </motion.div>
    </main>
    )
}