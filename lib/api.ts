import { IProduct } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

const ABORT_SIGNAL_TIMEOUT = 3000;
const CASH_TIME = 3600;

export async function getProducts(
  paginationParams: string
): Promise<{ products: IProduct[]; total: number }> {
  const response = await fetch(`${BASE_URL}?${paginationParams}`, {
    signal: AbortSignal.timeout(ABORT_SIGNAL_TIMEOUT),
    next: { revalidate: CASH_TIME },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
}

export async function getProductById(id: string): Promise<IProduct> {
  const response = await fetch(`${BASE_URL}/${id}`, {
    signal: AbortSignal.timeout(ABORT_SIGNAL_TIMEOUT),
    next: { revalidate: CASH_TIME },
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
      signal: AbortSignal.timeout(ABORT_SIGNAL_TIMEOUT),
      next: { revalidate: CASH_TIME },
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
      signal: AbortSignal.timeout(ABORT_SIGNAL_TIMEOUT),
      next: { revalidate: CASH_TIME },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  return response.json();
}

export async function getCategories(): Promise<string[]> {
  const response = await fetch(`${BASE_URL}/category-list`, {
    signal: AbortSignal.timeout(ABORT_SIGNAL_TIMEOUT),
    next: { revalidate: CASH_TIME },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}
