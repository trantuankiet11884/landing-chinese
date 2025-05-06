import TestimonialCard from "@/components/testimonial-card";

export const TestimonialsSection = () => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
            Testimonials
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gray-800">
            What Our Chinese Learners Say
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from our community of Chinese language learners
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <TestimonialCard
          name="Sarah Johnson"
          role="Chinese Learner"
          testimonial="The approach to teaching Chinese has been revolutionary. The interactive lessons and native speaker sessions helped me progress faster than I thought possible."
          avatar="/placeholder.svg?height=80&width=80"
        />
        <TestimonialCard
          name="Michael Chen"
          role="Chinese Learner"
          testimonial="The community aspect makes all the difference. Practicing with other Chinese learners keeps me motivated."
          avatar="/placeholder.svg?height=80&width=80"
        />
        <TestimonialCard
          name="Emma Rodriguez"
          role="Chinese Learner"
          testimonial="The structured curriculum is perfect for busy professionals. I can learn Chinese at my own pace with a clear path to fluency."
          avatar="/placeholder.svg?height=80&width=80"
        />
      </div>
    </div>
  </section>
);
