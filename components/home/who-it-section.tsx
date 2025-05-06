"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export const WhoItsForSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
            Who We Help
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            Our Chinese Course is Best Suited For...
          </h2>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative h-40 w-40 rounded-lg bg-cyan-50 flex items-center justify-center">
            <Image
              src="https://gurulango.com/_next/image/?url=%2Fimages%2Fhome%2Fbest-suited-student.png&w=384&q=100"
              alt="Students"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="text-xl font-bold text-cyan-800">Students</h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative h-40 w-40 rounded-lg bg-cyan-50 flex items-center justify-center">
            <Image
              src="https://gurulango.com/_next/image/?url=%2Fimages%2Fhome%2Fbest-suited-worker.png&w=640&q=100"
              alt="Employees"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="text-xl font-bold text-cyan-800">Employees</h3>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <div className="relative h-40 w-40 rounded-lg bg-cyan-50 flex items-center justify-center">
            <Image
              src="https://gurulango.com/_next/image/?url=%2Fimages%2Fhome%2Fbest-suited-traveler.png&w=640&q=100"
              alt="Travelers"
              width={100}
              height={100}
            />
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="text-xl font-bold text-cyan-800">Travelers</h3>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center">
        <div className="flex items-center space-x-2">
          <CheckCircle className="h-6 w-6 text-green-500" />
          <p className="text-lg text-gray-700 font-medium">
            Or anyone looking to master Chinese
          </p>
        </div>
      </div>
    </div>
  </section>
);
