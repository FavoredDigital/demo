"use client";

import { Trophy, Star, MapPin } from "lucide-react";

const features = [
  {
    name: "25+ Years Experience",
    description:
      "Decades of hands-on experience means we have seen it all and can fix it all. Trust our veteran mechanics with your vehicle.",
    icon: Trophy,
  },
  {
    name: "5-Star Reviews",
    description:
      "Our customers consistently rate us 5 stars for quality work, fair pricing, and exceptional customer service.",
    icon: Star,
  },
  {
    name: "Locally Owned",
    description:
      "We are your neighbors. As a locally owned business, we take pride in serving our community with integrity.",
    icon: MapPin,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Quality You Can Trust
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-white">
              When it comes to your vehicle, you deserve a shop that treats it
              like their own. We combine old-school craftsmanship with modern
              technology to deliver results that exceed expectations.
            </p>

            <dl className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <dt className="text-base font-semibold text-foreground">
                      {feature.name}
                    </dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "25+", label: "Years in Business" },
              { value: "10k+", label: "Vehicles Serviced" },
              { value: "5.0", label: "Average Rating" },
              { value: "100%", label: "Satisfaction Guarantee" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
