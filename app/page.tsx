import { ThemeToggle } from "@/components/shared/theme-toggle";
import { ProductList } from "@/components/shared/product-list";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-10">
      <div className="mb-8 flex justify-between">
        <h1 className="text-3xl font-extrabold">PRODUCT CATALOG</h1>
        <ThemeToggle />
      </div>
      <ProductList />
    </main>
  );
}
