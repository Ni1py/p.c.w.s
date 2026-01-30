import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NAVIGATION_PARAMS } from "@/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function updateURL(
  urlParam: string,
  newValue: string,
  params: URLSearchParams,
  pathname: string,
  isSearchable?: boolean
): string {
  params.set(urlParam, newValue.toString());
  isSearchable && params.set(NAVIGATION_PARAMS.PAGE, "1");
  return `${pathname}?${params.toString()}`;
}

export function clearUrlParam(
  urlParam: string,
  params: URLSearchParams,
  pathname: string,
  isSearchable?: boolean
): string {
  params.delete(urlParam);
  isSearchable && params.set(NAVIGATION_PARAMS.PAGE, "1");
  const queryParams = params.toString();
  return queryParams ? `${pathname}?${queryParams}` : pathname;
}
