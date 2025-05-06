"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Users } from "lucide-react";

export const FeaturesSection = () => (
  <section className="py-16 md:py-24 bg-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
            Our Approach
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            Why Learn Chinese with Us?
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our unique methodology makes Chinese learning effective and
            enjoyable
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
        {[
          {
            icon: <Globe className="h-10 w-10 text-cyan-600" />,
            title: "Immersive Chinese",
            description:
              "Learn through real-life Chinese conversations with native speakers",
          },
          {
            icon: <BookOpen className="h-10 w-10 text-cyan-600" />,
            title: "Structured Chinese Path",
            description:
              "Master Chinese from beginner to advanced with our curriculum",
          },
          {
            icon: <Users className="h-10 w-10 text-cyan-600" />,
            title: "Chinese Community",
            description:
              "Practice with fellow Chinese learners and get teacher feedback",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center space-y-3 rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
            <p className="text-center text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
