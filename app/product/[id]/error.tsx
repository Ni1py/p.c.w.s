"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-4">
      <h2 className="text-destructive text-2xl font-bold">
        Something went wrong!
      </h2>
      <p className="text-muted-foreground">
        Could not load the product details.
      </p>

      <div className="flex gap-4">
        <Button onClick={() => reset()} variant="outline">
          Try again
        </Button>
        <Button asChild>
          <Link href="/">Back to Catalog</Link>
        </Button>
      </div>
    </div>
  );
}
