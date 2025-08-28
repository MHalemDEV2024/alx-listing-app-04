import React, { useState } from "react";
import { useRouter } from "next/router";

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const router = useRouter();

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights * price : 0;
  };

  const handleReserve = () => {
    // Navigate to booking page with query params (optional)
    router.push({
      pathname: "/booking",
      query: {
        checkIn,
        checkOut,
        total: calculateTotal(),
      },
    });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-6">
      <h3 className="text-xl font-semibold mb-4">${price}/night</h3>

      <div className="mb-4">
        <label className="block mb-1">Check-in</label>
        <input
          type="date"
          className="border p-2 w-full rounded"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Check-out</label>
        <input
          type="date"
          className="border p-2 w-full rounded"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <p>
          Total payment: <strong>${calculateTotal()}</strong>
        </p>
      </div>

      <button
        onClick={handleReserve}
        className="bg-green-500 text-white py-2 px-4 rounded w-full hover:bg-green-600"
      >
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
