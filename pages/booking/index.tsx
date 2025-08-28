// File: pages/booking/index.tsx
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post("/api/bookings", formData);
      alert("✅ Booking confirmed!");
    } catch (error) {
      setError("❌ Failed to submit booking.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {Object.keys(formData).map((field) => (
        <input
          key={field}
          name={field}
          placeholder={field}
          value={(formData as any)[field]}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
      ))}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
