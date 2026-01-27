import { ProductCard } from "@/components/shared/product-card";
import { IProduct } from "@/types/product";
import { SearchX } from "lucide-react";

interface IProductListProps {
  searchString: string;
}

export async function ProductList({ searchString }: IProductListProps) {
  const response = await fetch(
    searchString
      ? `https://dummyjson.com/products/search?q=${searchString}`
      : "https://dummyjson.com/products?limit=10"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  const productList = data.products as IProduct[];

  if (productList.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 py-10">
        <p className="text-muted-foreground text-2xl font-bold">
          Products not found for "{searchString}"
        </p>
        <SearchX className="text-muted-foreground h-9 w-9" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
