"use client";

import { Button } from "@/components/ui/button";

export default function DriverSignup() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Drive when you want, make what you need
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Make money on your schedule with deliveries or rides—or both. You can use your own car or choose a rental through Uber.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Get paid fast</h4>
                  <p className="text-gray-300">
                    Earn money for each trip and keep 100% of your tips.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Work on your schedule</h4>
                  <p className="text-gray-300">
                    You decide when and how long you want to drive.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Let the app lead the way</h4>
                  <p className="text-gray-300">
                    Just tap and go. You get turn-by-turn directions and all the info you need.
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-semibold">Requirements</h4>
                  <p className="text-gray-300">
                    Vehicle, valid driver's license, and smartphone required.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-medium">
                Get started
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-3">
                Already have a vehicle? Sign up to drive
              </Button>
            </div>

            <div className="text-sm text-gray-400">
              *Terms and conditions apply. Vehicle and smartphone not provided.
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad4c2cba-0556-4a09-9f27-460aa6430264.png"
                alt="Happy uber driver earning money with smartphone app in modern car dashboard view"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            
            {/* Earning Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white text-black p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">$1,000+</div>
                <div className="text-sm text-gray-600">average weekly earnings*</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Driver Info */}
        <div className="mt-20 border border-gray-700 rounded-xl p-8 md:p-12">
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold">
              Why drivers choose Uber
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <div className="text-black text-2xl font-bold">$</div>
                </div>
                <h4 className="text-xl font-semibold">Set your own hours</h4>
                <p className="text-gray-300">
                  You decide when and how long you want to drive. No shifts, no boss.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <div className="text-black text-2xl font-bold">★</div>
                </div>
                <h4 className="text-xl font-semibold">Get paid instantly</h4>
                <p className="text-gray-300">
                  Cash out your earnings instantly, any time you want.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                  <div className="text-black text-2xl font-bold">⚡</div>
                </div>
                <h4 className="text-xl font-semibold">Drive safely</h4>
                <p className="text-gray-300">
                  We're committed to making every ride safe and secure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}