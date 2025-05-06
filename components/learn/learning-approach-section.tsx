"use client";
import { motion } from "framer-motion";
import { Headphones, MessageCircle, BookOpen, PenTool } from "lucide-react";
import React from "react";

const LearningApproachSection = () => {
  const pillars = [
    {
      icon: <Headphones className="h-10 w-10 text-teal-600" />,
      title: "Listening",
      description: "Train your ear with native speakers and authentic content",
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-teal-600" />,
      title: "Speaking",
      description:
        "Practice conversation from day one with interactive exercises",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-teal-600" />,
      title: "Reading",
      description:
        "Master characters progressively with our unique memory techniques",
    },
    {
      icon: <PenTool className="h-10 w-10 text-teal-600" />,
      title: "Writing",
      description: "Learn proper stroke order and character composition",
    },
  ];

  return (
    <section className="bg-cyan-50 py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
              Our Methodology
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-cyan-900">
              The 365 Master Chinese Learning Approach
            </h2>
            <p className="max-w-[700px] text-cyan-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our proven 4-pillar methodology ensures effective and enjoyable
              learning
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100">
                {pillar.icon.type === Headphones ||
                pillar.icon.type === MessageCircle ||
                pillar.icon.type === BookOpen ||
                pillar.icon.type === PenTool
                  ? React.cloneElement(pillar.icon, {
                      className: "h-10 w-10 text-cyan-600",
                    })
                  : pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-cyan-900">
                {pillar.title}
              </h3>
              <p className="text-center text-cyan-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningApproachSection;
