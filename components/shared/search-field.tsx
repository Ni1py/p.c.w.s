"use client";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { clearUrlParam, cn, updateURL } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SEARCH_PARAMS } from "@/lib/constants";
import { Search } from "lucide-react";

export function SearchField({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get(SEARCH_PARAMS.SEARCH) || "";

  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    setSearchString(search);
  }, [search]);

  const updateSearchParams = (newValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(updateURL(SEARCH_PARAMS.SEARCH, newValue, params, pathname), {
      scroll: false,
    });
  };

  const clearSearchParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(clearUrlParam(SEARCH_PARAMS.SEARCH, params, pathname), {
      scroll: false,
    });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchString(newValue);
    if (newValue === "") clearSearchParams();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateSearchParams(searchString);
      e.currentTarget.blur();
    }
  };

  return (
    <Field
      orientation="horizontal"
      className={cn("max-w-sm gap-2", className)}
      {...props}
    >
      <Input
        type="search"
        value={searchString}
        placeholder="Search..."
        onChange={(e) => onChange(e)}
        onKeyDown={(e) => onKeyDown(e)}
      />
      <Button
        variant="outline"
        onClick={() => updateSearchParams(searchString)}
        className="cursor-pointer"
        size="icon"
        disabled={!searchString}
      >
        <Search />
      </Button>
    </Field>
  );
}
