import { Filter } from "@/components/shared/filter";
import { NAVIGATION_PARAMS } from "@/lib/constants";
import * as React from "react";
import { getCategories } from "@/lib/api";

export async function CategoryFilter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const categoryList = await getCategories();

  return (
    <Filter
      urlParam={NAVIGATION_PARAMS.CATEGORY}
      filterValueList={categoryList}
      className={className}
      {...props}
    />
  );
}
