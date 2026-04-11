"use client";

import { Suspense } from "react";
import { useShopInfo } from "@/hooks/use-shop-info";
import { Star } from "lucide-react";

function TestimonialsDiv() {
  const { shopName } = useShopInfo();

  const testimonials = [
    {
      name: "Michael R.",
      date: "2 weeks ago",
      rating: 5,
      text: `${shopName} is hands down the best auto shop I've ever been to. They diagnosed an issue three other shops missed and fixed it at a fair price. Highly recommend!`,
    },
    {
      name: "Sarah T.",
      date: "1 month ago",
      rating: 5,
      text: `Been bringing my cars here for years. The team at ${shopName} always treats me right. Honest pricing, quality work, and they explain everything clearly.`,
    },
    {
      name: "David K.",
      date: "3 weeks ago",
      rating: 5,
      text: `Had my classic Mustang restored here and the work is absolutely stunning. ${shopName} understood my vision and delivered beyond my expectations. True craftsmen!`,
    },
  ];

  return (
    <section className="bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            {"Don't"} just take our word for it. Here is what our satisfied
            customers have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-background p-6"
            >
              {/* Google-style Header */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.date}
                  </div>
                </div>
              </div>

              {/* Stars */}
              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {testimonial.text}
              </p>

              {/* Google Review Badge */}
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <svg className="h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Posted on Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <Suspense fallback={<div className="bg-background" />}>
      <TestimonialsDiv />
    </Suspense>
  );
}
