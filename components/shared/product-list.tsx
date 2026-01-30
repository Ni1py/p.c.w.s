import { ProductCard } from "@/components/shared/product-card";
import { SearchX } from "lucide-react";
import { PaginationComponent } from "@/components/shared/pagination-component";
import {
  getProducts,
  getProductsByCategory,
  getProductsBySearch,
} from "@/lib/api";

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
  const offset = (currentPage - 1) * LIMIT;
  const paginationParams = `limit=${LIMIT}&skip=${offset}`;
  const data = searchString
    ? await getProductsBySearch(searchString, paginationParams)
    : categoryString
      ? await getProductsByCategory(categoryString, paginationParams)
      : await getProducts(paginationParams);

  const productList = data.products;

  const productListFiltered =
    searchString && categoryString
      ? productList.filter((product) => product.category === categoryString)
      : productList;

  if (productListFiltered) {
    if (productListFiltered.length === 0)
      return (
        <div className="flex flex-col items-center gap-2 py-10 font-mono">
          <p className="text-muted-foreground text-2xl font-bold">
            Products not found for "{searchString}"
          </p>
          <SearchX className="text-muted-foreground" size={50} />
        </div>
      );
  } else {
    return <></>;
  }

  const totalPages = Math.ceil(
    (searchString && categoryString ? productListFiltered.length : data.total) /
      LIMIT
  );

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
}
