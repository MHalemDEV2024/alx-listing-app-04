// File: components/common/Card.tsx
import Image from "next/image";
import Link from "next/link";  // ✅ Import Next.js Link
import React from "react";
import Pill from "./Pill";
import { PropertyProps } from "@/interfaces";

interface CardProps {
  property: PropertyProps;
}

const Card: React.FC<CardProps> = ({ property }) => {
  const imageSrc = property.image.startsWith("http")
    ? property.image
    : property.image; // handles both http & local paths

  return (
    <Link href={`/property/${property.id}`} passHref>
      <div className="h-full w-full rounded-2xl hover:shadow-lg transition overflow-hidden cursor-pointer">
        {/* Image */}
        <div className="relative w-full h-[220px]">
          <Image
            className="object-cover rounded-2xl"
            src={imageSrc}
            alt={property.name}
            fill
          />
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap pt-3 mt-2">
          {property.category.slice(0, 3).map((tag, i) => (
            <Pill key={i} title={tag} />
          ))}
        </div>

        {/* Title & Rating */}
        <div className="flex items-start justify-between pt-3">
          <div>
            <h3 className="font-semibold text-lg text-[#161117] leading-snug">
              {property.name}
            </h3>
            <p className="text-sm text-gray-500">
              {property.address.city}, {property.address.country}
            </p>
          </div>
          <div className="flex items-center ml-2">
            <Image src="/assets/images/star.png" alt="Star" width={18} height={18} />
            <p className="ml-1 text-sm font-medium text-gray-700">
              {property.rating}
            </p>
          </div>
        </div>

        {/* Features & Price */}
        <div className="flex items-center justify-between py-4">
          {/* Features */}
          <div className="flex items-center gap-4 text-gray-600 text-sm bg-p3 px-4 py-1 rounded-full">
            <div className="flex items-center gap-1">
              <Image src="/assets/icons/bed.svg" alt="Bed" width={16} height={16} />
              <span>{property.offers.bed}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/assets/icons/bathtub.svg" alt="Bath" width={16} height={16} />
              <span>{property.offers.shower}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image src="/assets/icons/people.svg" alt="People" width={16} height={16} />
              <span>{property.offers.occupants}</span>
            </div>
          </div>

          {/* Price */}
          <p className="text-xl font-bold text-gray-900">
            ${property.price}
            <span className="text-sm font-normal text-gray-600">/month</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
