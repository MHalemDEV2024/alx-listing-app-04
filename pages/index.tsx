// File: pages/index.tsx
import Card from "@/components/common/Card";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import React from "react";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Beachfront",
  "Mountain View",
];

// Pill button component
const Pill: React.FC<{ label: string }> = ({ label }) => (
  <button className="px-4 py-1 bg-p3 hover:bg-p2 hover:text-white text-gray-700 rounded-full text-sm transition">
    {label}
  </button>
);

export default function Home() {
  return (
    <div className="space-y-8 bg-white">
      {/* Hero Section */}
      <section
        className="h-[400px] rounded-2xl bg-cover bg-center relative flex items-center justify-center text-white text-center mx-auto max-w-7xl px-4"
        style={{ backgroundImage: 'url("/assets/images/hero.png")' }}
      >
        <div className=" p-4 rounded-xl ">
          <h1 className="text-8xl md:text-6xl font-semibold font-sourceSans mb-2 text-white">
            Find your favorite place here!
          </h1>
          <p className="text-xl text-white">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="text-gray-700 flex flex-wrap justify-between items-center max-w-7xl mx-auto p-4">
        <div className="flex gap-2 flex-wrap">
          {filters.map((f, i) => (
            <Pill label={f} key={i} />
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <button className="border border-gray-500 rounded-full px-4 py-1 text-sm hover:bg-gray-700 hover:text-white transition">
            Filter
          </button>
          <select className="border border-gray-500 rounded-full px-4 py-1 text-sm text-gray-700 hover:bg-gray-700 hover:text-white transition">
            <option>Sort by: Highest Price</option>
          </select>
        </div>
      </section>

      {/* Listing Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto p-4">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, index: number) => (
          <Card key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
