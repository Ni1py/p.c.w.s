import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { cn } from "@/lib/utils";

export function SearchField({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <Field
      orientation="horizontal"
      className={cn("max-w-sm gap-2", className)}
      {...props}
    >
      <Input type="search" placeholder="Search..." />
      <Button>Search</Button>
    </Field>
  );
}
