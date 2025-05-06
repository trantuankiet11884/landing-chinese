"use client";

import { motion } from "framer-motion";
import { DownloadIcon, Star, Users } from "lucide-react";

export const CommunitySection = () => (
  <section className="bg-cyan-50 py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
            Our Impact
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            Join Our Chinese Learning Community
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Thousands of students worldwide trust us for their Chinese learning
            journey
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-12 py-8 md:grid-cols-3">
        {[
          {
            number: "1M+",
            label: "Chinese learners",
            icon: (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <Users className="h-8 w-8 text-cyan-600" />
              </div>
            ),
          },
          {
            number: "200k+",
            label: "5 stars rating",
            icon: (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <Star className="h-8 w-8 text-cyan-600" />
              </div>
            ),
          },
          {
            number: "1.5M+",
            label: "Downloads",
            icon: (
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                <DownloadIcon className="h-8 w-8 text-cyan-600" />
              </div>
            ),
          },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            {stat.icon}
            <h3 className="text-4xl font-bold text-cyan-600">{stat.number}</h3>
            <p className="mt-2 text-lg text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
