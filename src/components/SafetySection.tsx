"use client";

import { Button } from "@/components/ui/button";

interface SafetyFeatureProps {
  title: string;
  description: string;
}

function SafetyFeature({ title, description }: SafetyFeatureProps) {
  return (
    <div className="space-y-3">
      <h4 className="text-xl font-semibold text-gray-900">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function SafetySection() {
  const safetyFeatures: SafetyFeatureProps[] = [
    {
      title: "Background checks",
      description: "We screen every driver before they can drive on the Uber platform.",
    },
    {
      title: "24/7 support",
      description: "Get help anytime, anywhere. Our support team is available around the clock.",
    },
    {
      title: "Real-time tracking",
      description: "Share your trip with friends and family so they can track your journey in real-time.",
    },
    {
      title: "Emergency assistance",
      description: "Get help fast with our emergency button that connects you directly to local authorities.",
    },
  ];

  return (
    <section id="safety" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Safety never stops
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're committed to your safety every step of the way. Our technology helps keep you safe before, during, and after every ride.
              </p>
            </div>

            <div className="space-y-6">
              {safetyFeatures.map((feature, index) => (
                <SafetyFeature key={index} {...feature} />
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-black hover:bg-gray-800 px-8 py-3">
                Learn about our safety features
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                Read our Community Guidelines
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/df6eced5-4bfa-44dc-8016-6b8678baeea2.png"
                alt="Safe and secure uber ride with driver and passenger both wearing masks clean car interior"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Safety Badge */}
            <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">99.9%</div>
                <div className="text-sm text-gray-300">of trips end safely</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Safety Info */}
        <div className="mt-20 bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Setting 10,000+ cities in motion
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The app is available in thousands of cities worldwide, so you can request a ride even when you're far from home.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">5B+</div>
                <div className="text-gray-600">trips completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">10k+</div>
                <div className="text-gray-600">cities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">118M</div>
                <div className="text-gray-600">monthly active users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">5M+</div>
                <div className="text-gray-600">drivers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}