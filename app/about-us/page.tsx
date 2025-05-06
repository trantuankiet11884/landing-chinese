"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronRight,
  Globe,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Mail,
} from "lucide-react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function AboutUsPage() {
  // Team members data
  const teamMembers = [
    {
      name: "David Chen",
      role: "Founder & CEO",
      bio: "Former language professor with a passion for making language learning accessible to everyone.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Curriculum",
      bio: "Polyglot with expertise in developing effective language learning methodologies.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Li Wei",
      role: "Chinese Language Director",
      bio: "Native Mandarin speaker with over 10 years of teaching experience at prestigious language institutions.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Jean Dupont",
      role: "French Language Director",
      bio: "Certified language instructor specializing in immersive teaching methods for French learners.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Carlos Vega",
      role: "Spanish Language Director",
      bio: "Award-winning educator with expertise in making Spanish accessible to learners of all levels.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Technology",
      bio: "Tech innovator focused on creating engaging digital learning experiences for language students.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#f0f4ff] to-white py-20 md:py-28">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center space-y-4"
              >
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800 mb-2">
                  About 365 Master
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Transforming Language Learning Since 2015
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  We're on a mission to make language learning effective,
                  enjoyable, and accessible to everyone around the world.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700"
                    asChild
                  >
                    <Link href="#our-story">
                      Our Story
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#meet-the-team">Meet Our Team</Link>
                  </Button>
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
                    alt="365 Master Team"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Globe className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Global Reach</p>
                      <p className="text-xs text-gray-500">
                        Students in 50+ countries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Growing Community</p>
                      <p className="text-xs text-gray-500">
                        100,000+ active learners
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  How 365 Master Began
                </h2>
              </div>
            </div>
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="relative">
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="365 Master Founding"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-lg bg-white p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Founded in 2015</p>
                      <p className="text-xs text-gray-500">
                        By language enthusiasts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-gray-500 md:text-lg">
                  365 Master was born from a simple observation: traditional
                  language learning methods weren't working for most people. Our
                  founder, David Chen, experienced this frustration firsthand
                  while trying to learn multiple languages.
                </p>
                <p className="text-gray-500 md:text-lg">
                  After years as a language professor, David assembled a team of
                  linguists, educators, and technologists with a shared vision:
                  to create a language learning platform that actually works.
                </p>
                <p className="text-gray-500 md:text-lg">
                  We launched in 2015 with just two languages and a handful of
                  students. Today, we offer courses in 10+ languages to over
                  100,000 active learners worldwide, with a team of 50+
                  dedicated language experts.
                </p>
                <p className="text-gray-500 md:text-lg">
                  Our mission remains the same: to break down language barriers
                  and make effective language learning accessible to everyone,
                  regardless of their background or circumstances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What We Stand For
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  The principles that guide everything we do
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "Accessibility",
                  description:
                    "Making quality language education available to everyone, regardless of location or background",
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: "Community",
                  description:
                    "Building connections between learners and native speakers to enhance the learning experience",
                },
                {
                  icon: <BookOpen className="h-10 w-10 text-blue-600" />,
                  title: "Effectiveness",
                  description:
                    "Creating methods that actually work, based on research and real-world results",
                },
                {
                  icon: <CheckCircle className="h-10 w-10 text-blue-600" />,
                  title: "Quality",
                  description:
                    "Maintaining the highest standards in our curriculum, teachers, and technology",
                },
                {
                  icon: <Award className="h-10 w-10 text-blue-600" />,
                  title: "Innovation",
                  description:
                    "Constantly improving our methods and technology to enhance the learning experience",
                },
                {
                  icon: <Mail className="h-10 w-10 text-blue-600" />,
                  title: "Responsiveness",
                  description:
                    "Listening to our students and adapting to their needs and feedback",
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-center text-gray-500">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section id="meet-the-team" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Meet the People Behind 365 Master
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Passionate educators and innovators dedicated to transforming
                  language learning
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-3 rounded-lg border p-6 shadow-sm"
                >
                  <div className="h-32 w-32 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                  <p className="text-center text-gray-500">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-800">
                  Our Impact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Achievements & Milestones
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  The journey so far and the difference we've made
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  number: "100k+",
                  label: "Active Students",
                  description: "Learners currently using our platform",
                },
                {
                  number: "10+",
                  label: "Languages",
                  description: "Comprehensive courses available",
                },
                {
                  number: "50+",
                  label: "Countries",
                  description: "Global community of learners",
                },
                {
                  number: "95%",
                  label: "Satisfaction",
                  description: "Students who recommend us",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-blue-600">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold">{stat.label}</h3>
                  <p className="text-center text-sm text-gray-500">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 space-y-6">
              <div className="rounded-lg border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Our Journey</h3>
                <div className="space-y-4">
                  {[
                    {
                      year: "2015",
                      title: "365 Master Founded",
                      description:
                        "Started with Chinese and Spanish courses for beginners",
                    },
                    {
                      year: "2017",
                      title: "Mobile App Launch",
                      description:
                        "Expanded our reach with iOS and Android applications",
                    },
                    {
                      year: "2019",
                      title: "10,000 Student Milestone",
                      description:
                        "Celebrated our growing community of language learners",
                    },
                    {
                      year: "2021",
                      title: "Curriculum Expansion",
                      description:
                        "Added 5 new languages and advanced level courses",
                    },
                    {
                      year: "2023",
                      title: "100,000 Student Milestone",
                      description:
                        "Reached students in over 50 countries worldwide",
                    },
                  ].map((milestone, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                          {milestone.year.substring(2)}
                        </div>
                        {index < 4 && (
                          <div className="h-full w-0.5 bg-blue-100"></div>
                        )}
                      </div>
                      <div className="pb-4">
                        <h4 className="text-lg font-bold">
                          {milestone.year}: {milestone.title}
                        </h4>
                        <p className="text-gray-500">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
