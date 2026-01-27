"use client";

import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchField({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const search = searchParams.get("search") || "";

  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    setSearchString(search);
  }, [search]);

  const updateSearchURL = (newValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("search", newValue.toString());
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const clearSearch = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("search");
    const queryParams = params.toString();
    const query = queryParams ? `${pathname}?${queryParams}` : pathname;
    router.push(query, { scroll: false });
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSearchString(newValue);
    if (newValue === "") clearSearch();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateSearchURL(searchString);
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
      <Button onClick={() => updateSearchURL(searchString)}>Search</Button>
    </Field>
  );
}
