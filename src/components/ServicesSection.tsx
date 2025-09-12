"use client";

import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonVariant?: "default" | "outline";
}

function ServiceCard({ title, description, imageUrl, imageAlt, buttonText, buttonVariant = "default" }: ServiceCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] mb-6">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
        <Button 
          variant={buttonVariant}
          className={`${buttonVariant === "outline" 
            ? "border-black text-black hover:bg-black hover:text-white" 
            : "bg-black hover:bg-gray-800"
          } px-8 py-2`}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const services: ServiceCardProps[] = [
    {
      title: "Ride",
      description: "Go anywhere with Uber. Request a ride, hop in, and go.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3661bd0-32ec-4fe9-ba75-628a5d09214c.png",
      imageAlt: "Sleek modern black sedan car in urban city environment professional uber ride",
      buttonText: "Get a ride",
    },
    {
      title: "Drive",
      description: "Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc5c1a48-96fc-44b1-9ce8-0ddf4311415a.png",
      imageAlt: "Professional uber driver smiling in clean modern car interior steering wheel",
      buttonText: "Start earning",
      buttonVariant: "outline",
    },
    {
      title: "Eat",
      description: "Get your favorite food delivered in a snap. Your door is our new table.",
      imageUrl: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/46ce5ea6-01ca-43ab-a298-4203aed8dafd.png",
      imageAlt: "Fresh gourmet food delivery bags and restaurant meals ready for delivery",
      buttonText: "Order now",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Go anywhere, get anything
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make the most of your time in the city with rides, food delivery, and more.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            There's more
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Uber for Business</h4>
              <p className="text-gray-600 mb-4">
                Transform the way your company moves and feeds its people.
              </p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Get started
              </Button>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Uber Freight</h4>
              <p className="text-gray-600 mb-4">
                A technology platform that connects shippers and carriers.
              </p>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}