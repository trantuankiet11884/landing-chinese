import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  avatar: string
}

export default function TestimonialCard({ name, role, testimonial, avatar }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="h-16 w-16 overflow-hidden rounded-full mb-4">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={name}
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center text-amber-500 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="text-gray-600 italic mb-4">"{testimonial}"</p>
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
