import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={250}
        className="object-cover w-full h-64"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.name}</h2>
        <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
        <p className="font-bold mt-2">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
