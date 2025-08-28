import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

const PropertyCard: React.FC<{ property: PropertyCardProps["property"] }> = ({ property }) => {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition cursor-pointer">
        <Image
          src={property.image}
          alt={property.title}
          width={400}
          height={250}
          className="rounded-t-lg object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-indigo-600 font-bold mt-2">${property.price} / night</p>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
