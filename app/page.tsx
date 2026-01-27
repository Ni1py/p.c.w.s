import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ProductList } from "@/components/shared/product-list";
import { SearchField } from "@/components/shared/search-field";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-extrabold">PRODUCT CATALOG</h1>
        <ThemeToggle />
      </div>
      <div className="mb-8 flex items-center justify-between">
        <SearchField />
      </div>
      <ProductList />
    </main>
  );
}
