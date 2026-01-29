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
    const paginationParams = `limit=${LIMIT}&skip=${offset}`;
    const url = searchString
      ? `https://dummyjson.com/products/search?q=${searchString}&${paginationParams}`
      : categoryString
        ? `https://dummyjson.com/products/category/${categoryString}/?${paginationParams}`
        : `https://dummyjson.com/products?${paginationParams}`;

    const response = await fetch(url);
    if (!response.ok) {
      return <ErrorState message="Server error. Try again later." />;
    }
    const data = await response.json();
    const productList = data.products as IProduct[];
    console.log(`Getting products: ${productList.length}`);
    const totalPages = Math.ceil(
      (searchString && categoryString ? data.length : data.total) / LIMIT
    );
    const productListFiltered =
      searchString && categoryString
        ? productList.filter((product) => product.category === categoryString)
        : productList;

    if (productListFiltered.length === 0) {
      return (
        <div className="flex flex-col items-center gap-2 py-10 font-mono">
          <p className="text-muted-foreground text-2xl font-bold">
            Products not found for "{searchString}"
          </p>
          <SearchX className="text-muted-foreground" size={50} />
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
        {totalPages > 1 && <PaginationComponent totalPages={totalPages} />}
      </div>
    );
  } catch (error) {
    return <ErrorState message={error.message} />;
  }
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="border-destructive/50 bg-destructive/10 rounded-lg border-2 p-10 text-center font-mono">
      <p className="text-destructive font-bold">Oops! {message}</p>
    </div>
  );
}
