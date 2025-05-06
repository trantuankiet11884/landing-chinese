"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const DownloadAppSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
            Get the App
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            Download Our Chinese Learning App
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Scan the QR codes to download our app from Google Play or the App
            Store
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="Google Play QR Code"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold text-gray-800">Google Play</h3>
          <Link
            href="https://play.google.com/store"
            className="text-cyan-600 hover:underline"
          >
            Download on Google Play
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <Image
            src="/placeholder.svg?height=150&width=150"
            alt="App Store QR Code"
            width={150}
            height={150}
            className="rounded-lg"
          />
          <h3 className="text-xl font-bold text-gray-800">App Store</h3>
          <Link
            href="https://www.apple.com/app-store/"
            className="text-cyan-600 hover:underline"
          >
            Download on the App Store
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);
