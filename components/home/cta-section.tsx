"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Globe,
  Users,
} from "lucide-react";

export const CTASection = () => (
  <section className="bg-cyan-600 py-16 md:py-24">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
            Ready to Start Your Chinese Journey?
          </h2>
          <p className="max-w-[600px] text-cyan-100 md:text-xl">
            Join thousands of successful Chinese learners and transform your
            skills today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              size="lg"
              className="bg-white text-cyan-600 hover:bg-gray-100"
            >
              Get Started Free
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              className="text-white border-white hover:bg-cyan-700"
            >
              Explore Chinese Courses
            </Button>
          </div>
        </div>
        <div className="relative mx-auto lg:ml-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="h-40 rounded-lg bg-cyan-500 p-6 text-white">
                <Globe className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-bold">Chinese Language</h3>
                <p className="text-sm text-cyan-100">Mandarin & Cantonese</p>
              </div>
              <div className="h-32 rounded-lg bg-cyan-500 p-6 text-white">
                <Users className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-bold">Community</h3>
                <p className="text-sm text-cyan-100">Learn with others</p>
              </div>
            </div>
            <div className="space-y-4 mt-6">
              <div className="h-32 rounded-lg bg-cyan-500 p-6 text-white">
                <BookOpen className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-bold">Expert Teachers</h3>
                <p className="text-sm text-cyan-100">Native speakers</p>
              </div>
              <div className="h-40 rounded-lg bg-cyan-500 p-6 text-white">
                <CheckCircle className="h-8 w-8 mb-2" />
                <h3 className="text-lg font-bold">Proven Method</h3>
                <p className="text-sm text-cyan-100">Structured for success</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
