import { IReview } from "@/types/review";
import { Star } from "lucide-react";
import * as React from "react";
import { Review } from "@/components/shared/review";

interface IReviewsProps extends React.ComponentProps<"div"> {
  reviews: IReview[];
  rating: number;
}

export function Reviews({ reviews, rating, className }: IReviewsProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-4">
        <h2 className="font-mono text-3xl">Reviews -</h2>
        <div className="flex gap-2 text-lg">
          <Star className="text-muted-foreground" />
          <span className="font-mono">{rating}</span>
        </div>
        <span className="font-mono text-3xl"> -</span>
        {reviews.length && (
          <span className="font-mono text-lg">{reviews.length} reviews</span>
        )}
      </div>
      {reviews.map((review, index) => (
        <Review review={review} key={index} />
      ))}
    </div>
  );
}
