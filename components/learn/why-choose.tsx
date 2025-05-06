"use client";
import { motion } from "framer-motion";
import {
  Clock,
  Sparkles,
  Brain,
  Flame,
  ChevronRight,
  Quote,
} from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-cyan-600" />,
      title: "5000+ Most Frequent Words",
      description:
        "Theme-based vocabulary with Pinyin, visuals, audio, and context examples crafted by experts",
      color: "bg-cyan-100",
      delay: 0,
    },
    {
      icon: <Sparkles className="h-6 w-6 text-cyan-600" />,
      title: "Interactive Word Games",
      description:
        "Engaging games like Spelling, Anagram, and Multiple Choice turn learning into a joyful journey",
      color: "bg-cyan-100",
      delay: 0.1,
    },
    {
      icon: <Brain className="h-6 w-6 text-cyan-600" />,
      title: "Study Less, Remember More",
      description:
        "AI-powered Spaced Repetition Algorithm optimizes review intervals for better retention",
      color: "bg-cyan-100",
      delay: 0.2,
    },
    {
      icon: <Flame className="h-6 w-6 text-cyan-600" />,
      title: "Stay Motivated",
      description:
        "Build habits with daily missions, reminders, and customizable learning sessions",
      color: "bg-cyan-100",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-cyan-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800 mb-2">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-cyan-900">
            Why Choose 365 Master Chinese?
          </h2>
          <p className="max-w-[700px] text-cyan-600 md:text-xl/relaxed">
            Our comprehensive approach makes learning Chinese effective,
            engaging, and enjoyable
          </p>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: feature.delay }}
                viewport={{ once: true }}
                className="flex flex-col h-full rounded-xl border border-cyan-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${feature.color} mb-4`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-cyan-900">
                  {feature.title}
                </h3>
                <p className="text-cyan-600 text-sm flex-grow">
                  {feature.description}
                </p>
                <div className="mt-4 pt-3 border-t border-cyan-100 flex items-center text-cyan-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-cyan-100 rounded-xl p-8 shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <Quote className="text-cyan-600 w-8 h-8 rotate-180" />
                  </div>
                  <div>
                    <p className="text-cyan-700 italic mb-3">
                      "I've tried many language apps, but 365 Master Chinese is
                      by far the most effective. The combination of games,
                      spaced repetition, and real-world examples helped me make
                      incredible progress in just 3 months."
                    </p>
                    <p className="font-bold text-cyan-900">Sarah L.</p>
                    <p className="text-sm text-cyan-600">
                      Intermediate Chinese Learner
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 md:border-l md:border-cyan-200 md:pl-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-600">97%</p>
                  <p className="text-sm text-cyan-600">Student satisfaction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-600">30+</p>
                  <p className="text-sm text-cyan-600">Native teachers</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-cyan-600">4.8/5</p>
                  <p className="text-sm text-cyan-600">App store rating</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
