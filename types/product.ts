import { IReview } from "@/types/review";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: number;
  reviews: IReview[];
  thumbnail: string;
}
