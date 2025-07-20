// File: components/common/Card.tsx
import Image from "next/image";
import React from "react";
import Pill from "./Pill";
import STAR_IMAGE from "@/public/assets/images/star.png";
import { PropertyProps } from "@/interfaces";

interface CardProps {
  property: PropertyProps;
}

const Card: React.FC<CardProps> = ({ property }) => {
  const imageSrc = property.image.startsWith("http")
    ? property.image
    : property.image; // local images handled by next.config.js

  return (
    <div className=" h-auto w-auto cursor-pointer hover:shadow-md hover:rounded-lg ">
      <div className="relative w-full h-[255px]">
        <Image
          className="rounded-lg object-cover"
          src={imageSrc}
          alt={property.name}
          fill
        />
      </div>

      <div className="p-2 flex gap-2 mt-2">
        {property.category.slice(0, 3).map((tag, i) => (
          <Pill key={i} title={tag} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-1">
        <div>
          <h3 className="font-semibold text-[22px] text-[#161117]">{property.name}</h3>
          <p className="font-medium text-[17px] text-[#929292]">
            {property.address.city}, {property.address.country}
          </p>
        </div>
        <div className="flex items-center">
          <Image src="/assets/images/star.png" alt="Star" width={18} height={18} />
          <p className="font-medium text-[#161117] text-[17px] ml-2">{property.rating}</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1  text-gray-700">
          {/* Bed */}
          <div className="flex items-center gap-1">
            <Image src="/assets/icons/bed.svg" alt="Bed Icon" width={16} height={16} />
            <p>{property.offers.bed}</p>
          </div>

          {/* Shower */}
          <div className="flex items-center gap-1">
            <Image src="/assets/icons/bathtub.svg" alt="bathtub Icon" width={16} height={16} />
            <p>{property.offers.shower}</p>
          </div>

          {/* Occupants / Users */}
          <div className="flex items-center gap-1">
            <Image src="/assets/icons/people.svg" alt="people Icon" width={16} height={16} />
            <p>{property.offers.occupants}</p>
          </div>
        </div>
        <p className="text-[22px] text-[#161117] font-semibold">
          ${property.price}
          <span className="text-[14px] text-[#161117]">/n</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
