import { ProductCard } from "@/components/shared/product-card";
import { IProduct } from "@/types/product";

export async function ProductList() {
  const response = await fetch("https://dummyjson.com/products?limit=10");
  const data = await response.json();
  const productList = data.products as IProduct[];
  console.log(`RESPONSE: ${JSON.stringify(data, null, 3)}`);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
