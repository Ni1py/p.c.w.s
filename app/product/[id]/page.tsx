import { IProduct } from "@/types/product";
import Image from "next/image";
import { BackButton } from "@/components/shared/back-button";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = (await response.json()) as IProduct;

  return (
    <div>
      <BackButton />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative aspect-square w-full max-w-[500px] overflow-hidden">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover transition-transform hover:scale-105"
            priority
            sizes="(max-width: 768px) 100vw, 500px"
          />
        </div>
        <div>
          <h1 className="mb-4 text-4xl font-bold">{product.title}</h1>
          <p className="text-primary mb-6 text-2xl font-semibold">
            ${product.price}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}
