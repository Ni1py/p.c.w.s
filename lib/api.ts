import { IProduct } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

export async function getProducts(
  paginationParams: string
): Promise<{ products: IProduct[]; total: number }> {
  const response = await fetch(`${BASE_URL}?${paginationParams}`, {
    signal: AbortSignal.timeout(3000),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
}

export async function getProductById(id: string): Promise<IProduct> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    signal: AbortSignal.timeout(3000),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}

export async function getProductsBySearch(
  searchString: string,
  paginationParams: string
): Promise<{ products: IProduct[]; total: number }> {
  const response = await fetch(
    `${BASE_URL}/search?q=${searchString}&${paginationParams}`,
    {
      signal: AbortSignal.timeout(3000),
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
}

export async function getProductsByCategory(
  categoryString: string,
  paginationParams: string
): Promise<{ products: IProduct[]; total: number }> {
  const response = await fetch(
    `${BASE_URL}/category/${categoryString}/?${paginationParams}`,
    {
      signal: AbortSignal.timeout(3000),
      next: { revalidate: 3600 },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/category-list`, {
    signal: AbortSignal.timeout(3000),
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}
