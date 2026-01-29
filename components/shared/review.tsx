import { IReview } from "@/types/review";
import { CircleUserRound, Star } from "lucide-react";

interface IReviewProps {
  review: IReview;
}

export function Review({ review }: IReviewProps) {
  const date = new Date(review.date);
  const formattedWithTime = new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);

  return (
    <div className="bg-card mt-4 flex items-center justify-between gap-4 rounded-xl p-6 font-mono">
      <div className="flex items-center gap-4">
        <CircleUserRound size={30} />
        <div className="flex flex-col gap-2">
          <span>{review.reviewerName}</span>
          <span className="text-muted-foreground">{review.reviewerEmail}</span>
        </div>
      </div>
      <span>{review.comment}</span>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Star size={20} />
          <span>{review.rating}</span>
        </div>
        <span>{formattedWithTime}</span>
      </div>
    </div>
  );
}
