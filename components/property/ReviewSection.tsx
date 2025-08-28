// File: components/property/ReviewSection.tsx
import axios from "axios";
import { useState, useEffect } from "react";

const ReviewSection = ({ propertyId }: { propertyId: string }) => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="space-y-3">
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="border p-3 rounded shadow-sm">
            <p className="font-semibold">{review.reviewerName}</p>
            <p>{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
