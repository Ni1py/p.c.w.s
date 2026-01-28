import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function updateURL(
  urlParam: string,
  newValue: string,
  params: URLSearchParams,
  pathname: string
): string {
  params.set(urlParam, newValue.toString());
  return `${pathname}?${params.toString()}`;
}

export function clearUrlParam(
  urlParam: string,
  params: URLSearchParams,
  pathname: string
): string {
  params.delete(urlParam);
  const queryParams = params.toString();
  return queryParams ? `${pathname}?${queryParams}` : pathname;
}
