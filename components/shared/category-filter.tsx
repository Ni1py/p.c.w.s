import { Filter } from "@/components/shared/filter";
import { NAVIGATION_PARAMS } from "@/lib/constants";
import * as React from "react";

export async function CategoryFilter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    if (!response.ok) {
      return (
        <Filter
          urlParam={NAVIGATION_PARAMS.CATEGORY}
          filterValueList={[]}
          disabled
          placeholder="Categories unavailable"
        />
      );
    }
    const categoryList = (await response.json()) as string[];

    return (
      <Filter
        urlParam={NAVIGATION_PARAMS.CATEGORY}
        filterValueList={categoryList}
        className={className}
        {...props}
      />
    );
  } catch (e) {
    return (
      <Filter
        urlParam={NAVIGATION_PARAMS.CATEGORY}
        filterValueList={[]}
        disabled
        placeholder="Failed to load"
      />
    );
  }
}
