// File: pages/property/[id].tsx
import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import React from "react";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Wait until router is ready to avoid hydration issues
  if (!router.isReady) return <p className="p-6">Loading...</p>;

  const property = PROPERTYLISTINGSAMPLE.find((p) => p.id === id);

  if (!property) return <p className="p-6">Property not found</p>;

  return (
    <div className="container mx-auto p-6 grid md:grid-cols-3 gap-6">
      {/* Property Details Section */}
      <div className="md:col-span-2">
        <PropertyDetail property={property} />
      </div>

      {/* Booking Section */}
      <div className="md:col-span-1">
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}
