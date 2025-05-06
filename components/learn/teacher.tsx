"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const TeacherProfilesSection = () => {
  const teachers = [
    {
      name: "Li Wei",
      role: "Mandarin Instructor",
      experience: "10+ years teaching experience",
      specialization: "Pronunciation & Conversation",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Zhang Min",
      role: "Character Specialist",
      experience: "8 years teaching experience",
      specialization: "Reading & Writing",
      avatar: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Chen Jie",
      role: "Business Chinese Expert",
      experience: "12 years teaching experience",
      specialization: "Professional Chinese",
      avatar: "/placeholder.svg?height=120&width=120",
    },
  ];

  return (
    <section className="bg-teal-50 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 px-3 py-1 text-sm text-teal-800">
              Our Teachers
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-teal-900">
              Learn from Native Chinese Speakers
            </h2>
            <p className="max-w-[700px] text-teal-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our experienced teachers are passionate about helping you succeed
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center space-y-3 rounded-lg border bg-white p-6 shadow-sm"
            >
              <div className="h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={teacher.avatar || "/placeholder.svg"}
                  alt={teacher.name}
                  width={120}
                  height={120}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-900">
                {teacher.name}
              </h3>
              <p className="text-teal-600 font-medium">{teacher.role}</p>
              <div className="flex items-center text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-center text-sm text-teal-600">
                {teacher.experience}
              </p>
              <p className="text-center text-sm font-medium text-teal-700">
                Specializes in: {teacher.specialization}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeacherProfilesSection;
