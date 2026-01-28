import { Filter } from "@/components/shared/filter";

export async function CategoryFilter() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products/category-list"
    );
    if (!response.ok) {
      return (
        <Filter
          urlParam="category"
          filterValueList={[]}
          disabled
          placeholder="Categories unavailable"
        />
      );
    }
    const categoryList = (await response.json()) as string[];

    return <Filter urlParam={"category"} filterValueList={categoryList} />;
  } catch (e) {
    return (
      <Filter
        urlParam="category"
        filterValueList={[]}
        disabled
        placeholder="Failed to load"
      />
    );
  }
}
