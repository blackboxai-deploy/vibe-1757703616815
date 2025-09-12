"use client";

import RideBookingForm from "./RideBookingForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5572a0db-b0f1-4b17-bb93-39a16ef32f3c.png"
          alt="Modern city skyline at night with busy traffic lights and urban transportation"
          className="w-full h-full object-cover opacity-30"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Get there
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                with <span className="font-bold">Uber</span>
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-lg">
              Request a ride, hop in, and go. Choose from a variety of ride options designed to fit your needs and budget.
            </p>

            {/* Mobile Form - Hidden on Desktop */}
            <div className="lg:hidden">
              <RideBookingForm />
            </div>

            {/* Additional CTAs for Mobile */}
            <div className="lg:hidden space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white text-black py-3 px-6 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                  Drive & earn
                </button>
                <button className="border border-white text-white py-3 px-6 rounded-lg font-medium hover:bg-white hover:text-black transition-colors">
                  Get food delivery
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Desktop Form */}
          <div className="hidden lg:flex justify-center">
            <RideBookingForm />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}