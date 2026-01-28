import { Filter } from "@/components/shared/filter";
import { SEARCH_PARAMS } from "@/lib/constants";

export async function CategoryFilter() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    if (!response.ok) {
      return (
        <Filter
          urlParam={SEARCH_PARAMS.CATEGORY}
          filterValueList={[]}
          disabled
          placeholder="Categories unavailable"
        />
      );
    }
    const categoryList = (await response.json()) as string[];

    return (
      <Filter
        urlParam={SEARCH_PARAMS.CATEGORY}
        filterValueList={categoryList}
      />
    );
  } catch (e) {
    return (
      <Filter
        urlParam={SEARCH_PARAMS.CATEGORY}
        filterValueList={[]}
        disabled
        placeholder="Failed to load"
      />
    );
  }
}
