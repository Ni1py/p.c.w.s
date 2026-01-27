import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CircleStar } from "lucide-react";
import { IProduct } from "@/types/product";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <Card className="bg-background overflow-hidden transition-all hover:scale-105 hover:shadow-lg">
      <div className="relative aspect-square">
        <Image src={product.thumbnail} alt={product.title} fill />
      </div>
      <CardHeader className="flex-1">
        <CardTitle className="text-lg">{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{product.price} $</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex items-center gap-2">
          <CircleStar className="text-muted-foreground" />
          <span className="text-muted-foreground font-bold">
            {product.rating}
          </span>
        </div>
        <span className="text-muted-foreground font-bold">
          {product.reviews.length} ratings
        </span>
      </CardFooter>
    </Card>
  );
}
