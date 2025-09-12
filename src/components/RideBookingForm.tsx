"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RideBookingForm() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Booking request:", { pickup, destination });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Request a ride now</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Pickup Location */}
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-400 rounded-full"></div>
            <Input
              type="text"
              placeholder="Pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
        </div>

        {/* Destination */}
        <div className="space-y-2">
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-black rounded-full"></div>
            <Input
              type="text"
              placeholder="Destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="pl-8 py-3 border-gray-300 focus:border-black focus:ring-black"
            />
          </div>
        </div>

        {/* Request Now Button */}
        <Button 
          type="submit" 
          className="w-full bg-black hover:bg-gray-800 text-white py-3 font-medium"
        >
          Request now
        </Button>

        {/* Schedule for later */}
        <Button 
          type="button" 
          variant="outline" 
          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
        >
          Schedule for later
        </Button>
      </form>

      {/* Additional Options */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Choose your ride</span>
          <button className="text-black hover:underline">
            View ride options
          </button>
        </div>
      </div>
    </div>
  );
}