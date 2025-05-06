"use client";
import { motion } from "framer-motion";
import { BookOpen, Play, CheckCircle, MessageCircle } from "lucide-react";
import Image from "next/image";

const TryItSection = () => {
  const features = [
    {
      icon: <BookOpen className="h-5 w-5 text-teal-600" />,
      title: "Context-Rich Learning",
      description:
        "Learn each word with images, audio pronunciation, and practical example sentences",
    },
    {
      icon: <Play className="h-5 w-5 text-teal-600" />,
      title: "Interactive Exercises",
      description:
        "Reinforce vocabulary through varied exercises like matching, flashcards, and quizzes",
    },
    {
      icon: <CheckCircle className="h-5 w-5 text-teal-600" />,
      title: "Smart Review System",
      description:
        "Our algorithm schedules reviews right before you're about to forget",
    },
    {
      icon: <MessageCircle className="h-5 w-5 text-teal-600" />,
      title: "Practice Conversations",
      description:
        "Use new vocabulary in dialogue scenarios with our AI conversation partner",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800 mb-2">
            Try It Yourself
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-teal-900">
            Experience a Sample Chinese Lesson
          </h2>
          <p className="max-w-[700px] text-teal-600 md:text-xl/relaxed">
            See how our interactive lessons make learning Chinese vocabulary
            engaging and effective
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative mx-auto"
          >
            <Image
              src={
                "https://gurulango.com/_next/image/?url=%2Fimages%2Fapp%2Fchinese-guru%2Flanding%2Fintro-2%2Fslideshow%2Fslide-0.png&w=1920&q=75"
              }
              alt="image"
              width={1}
              height={1}
              className="h-96 w-auto object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-teal-900">
              How Our Lessons Work
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-teal-900">
                      {feature.title}
                    </h4>
                    <p className="text-teal-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={
                  "https://gurulango.com/_next/image/?url=%2Fimages%2Fdownload-app%2Flight%2Fchplay-en.png&w=1920&q=75"
                }
                width={1}
                height={1}
                alt="gg"
                className="cursor-pointer w-32 h-32 object-contain hover:scale-105 duration-300 transition-all"
              />
              <Image
                src={
                  "https://gurulango.com/_next/image/?url=%2Fimages%2Fdownload-app%2Flight%2Fappstore-en.png&w=1920&q=75"
                }
                width={1}
                height={1}
                alt="gg"
                className="cursor-pointer w-32 h-32 object-contain hover:scale-105 duration-300 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TryItSection;
