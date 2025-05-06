"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
            From Our Blog
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            Chinese Learning Tips
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Insights and advice from Chinese language experts
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "5 Effective Ways to Practice Chinese Characters",
            excerpt:
              "Master the art of writing Chinese characters with these proven techniques...",
            date: "May 15, 2023",
            category: "Chinese",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "How to Improve Your Chinese Pronunciation",
            excerpt:
              "Tips from native speakers to perfect your Mandarin pronunciation...",
            date: "April 28, 2023",
            category: "Chinese",
            image: "/placeholder.svg?height=200&width=300",
          },
          {
            title: "The Best Resources for Self-Study Chinese",
            excerpt:
              "A curated list of books, apps, and websites for Chinese learners...",
            date: "April 10, 2023",
            category: "Chinese",
            image: "/placeholder.svg?height=200&width=300",
          },
        ].map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full bg-cyan-100 px-2.5 py-0.5 text-xs font-medium text-cyan-800">
                    {post.category}
                  </div>
                  <div className="text-xs text-gray-500">{post.date}</div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href="/blog"
                  className="text-cyan-600 text-sm font-medium hover:underline"
                >
                  Read More
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="outline"
          size="lg"
          asChild
          className="border-cyan-300 text-cyan-600 hover:bg-cyan-50"
        >
          <Link href="/blog">
            View All Articles
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  </section>
);
