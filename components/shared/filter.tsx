"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { clearUrlParam, cn, updateURL } from "@/lib/utils";
import * as React from "react";

interface IFilterProps extends React.ComponentProps<"div"> {
  urlParam: string;
  filterValueList: string[];
  disabled?: boolean;
  placeholder?: string;
}

export function Filter({
  urlParam,
  filterValueList,
  disabled = false,
  className,
  placeholder,
  ...props
}: IFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentFilter = searchParams.get(urlParam) || "";

  const onValueChange = (newValue: string) => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(updateURL(urlParam, newValue, params, pathname, true), {
      scroll: false,
    });
  };

  const onClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push(clearUrlParam(urlParam, params, pathname, true), {
      scroll: false,
    });
  };

  return (
    <div className={cn("flex gap-2", className)} {...props}>
      <Select
        onValueChange={(value) => {
          onValueChange(value);
        }}
        value={currentFilter}
        disabled={disabled}
      >
        <SelectTrigger className="w-full max-w-48">
          <SelectValue
            placeholder={placeholder ? placeholder : "Select a category"}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            {filterValueList.map((name, key) => (
              <SelectItem key={key} value={name}>
                {name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button
        variant="outline"
        className="cursor-pointer"
        size="icon"
        onClick={onClick}
        disabled={disabled || !currentFilter}
      >
        <X className="h-full w-full" />
      </Button>
    </div>
  );
}
