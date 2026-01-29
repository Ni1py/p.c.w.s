import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ProductList } from "@/components/shared/product-list";
import { SearchField } from "@/components/shared/search-field";
import { Suspense } from "react";
import { ProductListSkeleton } from "@/components/shared/product-list-skeleton";
import { CategoryFilter } from "@/components/shared/category-filter";

interface IHomeProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Home({ searchParams }: IHomeProps) {
  const _searchParams = await searchParams;
  const search = _searchParams.search;
  const category = _searchParams.category;
  const page = _searchParams.page;
  const searchString = typeof search === "string" ? search : "";
  const categoryString = typeof category === "string" ? category : "";
  const pageNumber = typeof page === "string" ? Number(page) : 1;

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">PRODUCT CATALOG</h1>
        <ThemeToggle />
      </div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <SearchField />
        <CategoryFilter />
      </div>
      <Suspense
        key={`${searchString}-${categoryString}`}
        fallback={<ProductListSkeleton />}
      >
        <ProductList
          searchString={searchString}
          categoryString={categoryString}
          currentPage={pageNumber}
        />
      </Suspense>
    </main>
  );
}
