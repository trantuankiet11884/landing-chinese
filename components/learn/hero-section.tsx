"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle, ChevronRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-cyan-50 to-white py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800 mb-2">
              Chinese Language
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-cyan-900">
              Master <span className="text-cyan-600">Chinese</span> with
              Confidence
            </h1>
            <p className="max-w-[600px] text-cyan-600 md:text-xl">
              Growing your Chinese vocabulary is so foundational to learning
              Chinese. Let's devote at least 10 minutes per day to vocabulary
              growth. Install now on Google Play or the App Store and start
              learning today!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                Start Learning Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-cyan-300 text-cyan-700 hover:bg-cyan-50"
              >
                Take Placement Test
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-cyan-100 border-2 border-white overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=32&width=32`}
                      alt="User"
                      width={32}
                      height={32}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-cyan-600">
                <span className="font-bold text-cyan-900">50K+</span> active
                learners
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto lg:ml-auto"
          >
            <div className="relative h-[400px] w-[350px] sm:h-[450px] sm:w-[400px] md:h-[500px] md:w-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=500&width=450"
                alt="Chinese Learning"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                  <MessageCircle className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-900">
                    Conversational Focus
                  </p>
                  <p className="text-xs text-cyan-600">Speak from day one</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 rounded-lg bg-white p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle className="h-5 w-5 text-cyan-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-cyan-900">
                    Native Teachers
                  </p>
                  <p className="text-xs text-cyan-600">
                    Learn authentic Chinese
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
