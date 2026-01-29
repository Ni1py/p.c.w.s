import { ProductCard } from "@/components/shared/product-card";
import { IProduct } from "@/types/product";
import { SearchX } from "lucide-react";
import { PaginationComponent } from "@/components/shared/pagination-component";

interface IProductListProps {
  searchString: string;
  categoryString: string;
  currentPage: number;
}

const LIMIT = 10;

export async function ProductList({
  searchString,
  categoryString,
  currentPage,
}: IProductListProps) {
  try {
    const offset = (currentPage - 1) * LIMIT;
    const url = searchString
      ? `https://dummyjson.com/products/search?q=${searchString}`
      : categoryString
        ? `https://dummyjson.com/products/category/${categoryString}`
        : `https://dummyjson.com/products?limit=${LIMIT}&skip=${offset}`;

    const response = await fetch(url);
    if (!response.ok) {
      return <ErrorState message="Server error. Try again later." />;
    }

    const data = await response.json();
    const productList = data.products as IProduct[];
    const totalPages = Math.ceil(data.total / LIMIT);
    const productListFiltered =
      searchString && categoryString
        ? productList.filter((product) => product.category === categoryString)
        : productList;

    if (productListFiltered.length === 0) {
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
      <div>
        <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {productListFiltered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {!searchString && !categoryString && (
          <PaginationComponent totalPages={totalPages} />
        )}
      </div>
    );
  } catch (error) {
    return <ErrorState message="Connection error. Try again later." />;
  }
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="border-destructive/50 bg-destructive/10 rounded-lg border-2 p-10 text-center">
      <p className="text-destructive font-bold">Oops! {message}</p>
    </div>
  );
}
