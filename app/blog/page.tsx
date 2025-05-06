"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Calendar, ChevronRight, Search, Tag, User } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  // Sample blog posts data
  const featuredPosts = [
    {
      id: 1,
      title: "5 Effective Ways to Practice Chinese Characters",
      excerpt:
        "Master the art of writing Chinese characters with these proven techniques that will help you memorize and understand the logic behind each stroke.",
      date: "May 15, 2023",
      author: "Li Wei",
      category: "Chinese",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "How to Improve Your Spanish Pronunciation",
      excerpt:
        "Tips and tricks from native speakers to perfect your Spanish accent and sound more natural in conversations.",
      date: "April 28, 2023",
      author: "Maria Rodriguez",
      category: "Spanish",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Best Resources for Self-Study French",
      excerpt:
        "A curated list of books, apps, and websites for French learners who want to make progress on their own schedule.",
      date: "April 10, 2023",
      author: "Jean Dupont",
      category: "French",
      image: "/placeholder.svg?height=400&width=600",
      readTime: "6 min read",
    },
  ];

  const recentPosts = [
    {
      id: 4,
      title: "Language Learning and Brain Health: The Cognitive Benefits",
      excerpt:
        "Discover how learning a new language can improve memory, problem-solving skills, and even delay cognitive decline.",
      date: "May 20, 2023",
      author: "Dr. Sarah Johnson",
      category: "Research",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Mastering Tones in Mandarin Chinese",
      excerpt:
        "A comprehensive guide to understanding and practicing the four tones in Mandarin Chinese for clearer communication.",
      date: "May 18, 2023",
      author: "Zhang Min",
      category: "Chinese",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "10 min read",
    },
    {
      id: 6,
      title: "How to Create an Effective Language Learning Routine",
      excerpt:
        "Build consistent habits that will help you make steady progress in your language learning journey.",
      date: "May 12, 2023",
      author: "Michael Chen",
      category: "Learning Tips",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "5 min read",
    },
    {
      id: 7,
      title: "Common Mistakes English Speakers Make When Learning Japanese",
      excerpt:
        "Avoid these pitfalls and accelerate your progress in mastering Japanese grammar and pronunciation.",
      date: "May 8, 2023",
      author: "Tanaka Yuki",
      category: "Japanese",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "The History and Evolution of the Spanish Language",
      excerpt:
        "Explore how Spanish developed from Latin and became one of the world's most widely spoken languages.",
      date: "May 5, 2023",
      author: "Carlos Vega",
      category: "Spanish",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "9 min read",
    },
    {
      id: 9,
      title:
        "Learning Multiple Languages Simultaneously: Strategies for Success",
      excerpt:
        "Is it possible to learn more than one language at the same time? Discover effective approaches and potential challenges.",
      date: "May 1, 2023",
      author: "Emma Rodriguez",
      category: "Learning Tips",
      image: "/placeholder.svg?height=300&width=400",
      readTime: "6 min read",
    },
  ];

  const categories = [
    "Chinese",
    "Spanish",
    "French",
    "Japanese",
    "German",
    "Learning Tips",
    "Research",
    "Success Stories",
    "Grammar",
    "Vocabulary",
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-[#f0f4ff] to-white py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
                  Language Learning Blog
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Insights & Tips for Language Learners
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Expert advice, success stories, and practical strategies to
                  accelerate your language learning journey
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    type="search"
                    placeholder="Search articles..."
                    className="w-full bg-white pl-9 pr-4 py-2 rounded-lg border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4 md:space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                  Featured Articles
                </h2>
                <p className="text-gray-500">
                  Our most popular and informative content
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardContent className="flex-1 p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                            {post.category}
                          </div>
                          <div className="text-xs text-gray-500">
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                          <div className="flex items-center text-sm">
                            <User className="mr-1 h-3 w-3 text-gray-500" />
                            <span className="text-gray-700">{post.author}</span>
                          </div>
                          <div className="flex items-center text-sm">
                            <Calendar className="mr-1 h-3 w-3 text-gray-500" />
                            <span className="text-gray-500">{post.date}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recent Posts and Sidebar */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Main Content - Recent Posts */}
              <div className="lg:col-span-2">
                <div className="space-y-2 mb-8">
                  <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">
                    Recent Articles
                  </h2>
                  <p className="text-gray-500">
                    The latest insights from our language experts
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {recentPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden h-full flex flex-col">
                        <div className="relative h-40 w-full overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="flex-1 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                              {post.category}
                            </div>
                            <div className="text-xs text-gray-500">
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold mb-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                            <div className="flex items-center text-xs">
                              <User className="mr-1 h-3 w-3 text-gray-500" />
                              <span className="text-gray-700">
                                {post.author}
                              </span>
                            </div>
                            <div className="flex items-center text-xs">
                              <Calendar className="mr-1 h-3 w-3 text-gray-500" />
                              <span className="text-gray-500">{post.date}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-center mt-8">
                  <Button variant="outline" size="lg">
                    Load More Articles
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Categories */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category, index) => (
                        <div
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-blue-100 hover:text-blue-800 cursor-pointer transition-colors"
                        >
                          {category}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="bg-blue-50">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2">
                      Subscribe to Our Newsletter
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Get the latest language learning tips and resources
                      delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="w-full bg-white"
                      />
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Popular Tags */}
                <Card>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Pronunciation",
                        "Vocabulary",
                        "Grammar",
                        "Speaking",
                        "Listening",
                        "Reading",
                        "Writing",
                        "Culture",
                        "Immersion",
                        "Study Tips",
                      ].map((tag, index) => (
                        <div
                          key={index}
                          className="flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm hover:bg-blue-100 hover:text-blue-800 cursor-pointer transition-colors"
                        >
                          <Tag className="mr-1 h-3 w-3" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
