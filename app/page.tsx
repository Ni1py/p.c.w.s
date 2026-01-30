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
    <main>
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
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
