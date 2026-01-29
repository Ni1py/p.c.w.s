import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { IProduct } from "@/types/product";
import Link from "next/link";

interface IProductCardProps {
  product: IProduct;
}

export function ProductCard({ product }: IProductCardProps) {
  return (
    <Link href={`product/${product.id}`}>
      <Card className="cursor-pointer overflow-hidden transition-all hover:scale-105 hover:shadow-lg">
        <div className="relative aspect-square">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
          />
        </div>
        <CardHeader className="flex-1">
          <CardTitle className="font-mono text-lg">{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-mono text-xl">{product.price}$</p>
        </CardContent>
        <CardFooter className="flex justify-between gap-4">
          <div className="flex items-center gap-2">
            <Star className="text-muted-foreground" />
            <span className="text-muted-foreground font-mono">
              {product.rating}
            </span>
          </div>
          <span className="text-muted-foreground overflow-hidden font-mono">
            {product.reviews.length} ratings
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
