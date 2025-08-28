import React, { useState } from "react";
import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useState<"offer" | "reviews" | "host">("offer");

  return (
    <div className="container mx-auto p-6">
      {/* Title & Rating */}
      <h1 className="text-4xl font-bold">{property.name}</h1>
      <div className="flex items-center space-x-2 mt-2 text-gray-700">
        <span className="text-yellow-500 font-medium">{property.rating} ★</span>
        <span>
          {property.address?.city}, {property.address?.country}
        </span>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <img
          src={property.image}
          alt={property.name}
          className="col-span-2 w-full h-96 object-cover rounded-lg"
        />
        {property.images?.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`${property.name}-${index}`}
            className="w-full h-48 object-cover rounded-lg"
          />
        ))}
      </div>

      {/* Tabs */}
      <div className="mt-6">
        <div className="flex space-x-4 border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === "offer"
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("offer")}
          >
            What we offer
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "reviews"
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "host"
                ? "border-b-2 border-blue-500 font-semibold"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("host")}
          >
            About host
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {/* Offer (Amenities + Booking Section) */}
          {activeTab === "offer" && (
            <div>
              <ul className="flex flex-wrap gap-2 mb-4">
                {property.category?.map((amenity, idx) => (
                  <li key={idx} className="bg-gray-200 px-3 py-1 rounded">
                    {amenity}
                  </li>
                ))}
              </ul>
              <BookingSection price={property.price} />
            </div>
          )}

          {/* Reviews */}
          {activeTab === "reviews" && (
            <ReviewSection propertyId={property.id} />
          )}

          {/* Host */}
          {activeTab === "host" && (
            <div>
              <h2 className="text-xl font-semibold mb-2">About the Host</h2>
              <p className="text-gray-700">{property.description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
