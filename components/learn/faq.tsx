"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is the best way to learn Chinese vocabulary?",
      answer:
        "The best way is through consistent practice with tools like spaced repetition, interactive games, and context-rich examples, which help reinforce memory effectively.",
    },
    {
      question: "How many words do I need to know to speak basic Chinese?",
      answer:
        "Around 500-1000 words can help you hold basic conversations, covering everyday topics and phrases.",
    },
    {
      question: "How does GuruLango Chinese work?",
      answer:
        "GuruLango uses AI-driven lessons, interactive exercises, and native audio to teach vocabulary and grammar progressively.",
    },
    {
      question:
        "How can I memorize Chinese vocabulary effectively with GuruLango Chinese?",
      answer:
        "Use GuruLango's spaced repetition, visual aids, and practice games to enhance retention and recall.",
    },
    {
      question: "Do I need to learn Chinese characters or just Pinyin?",
      answer:
        "Learning both is ideal, but starting with Pinyin for pronunciation and gradually adding characters works well.",
    },
    {
      question: "How does GuruLango Chinese help with pronunciation?",
      answer:
        "It provides native audio examples and interactive pronunciation exercises to refine your skills.",
    },
    {
      question: "Is GuruLango Chinese available on multiple devices?",
      answer:
        "Yes, it's accessible on iOS, Android, and web platforms for seamless learning.",
    },
    {
      question:
        "Does GuruLango Chinese include traditional Chinese characters?",
      answer:
        "Yes, it supports both simplified and traditional characters based on your preference.",
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const faqVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: any) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <section className="py-8 md:py-12 bg-cyan-50">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={headingVariants}
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-cyan-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </motion.div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={faqVariants}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border rounded-lg bg-white shadow-sm"
                >
                  <AccordionTrigger className="text-lg font-medium text-cyan-700 px-4 py-3 text-left hover:no-underline hover:bg-cyan-50">
                    {faq.question}
                  </AccordionTrigger>
                  <AnimatePresence>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={contentVariants}
                    >
                      <AccordionContent className="px-4 pb-4 pt-2 text-cyan-600">
                        {faq.answer}
                      </AccordionContent>
                    </motion.div>
                  </AnimatePresence>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
