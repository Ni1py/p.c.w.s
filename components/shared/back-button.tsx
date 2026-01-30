"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();

  return (
    <Button
      variant="text"
      size="md"
      className="text-muted-foreground hover:text-foreground cursor-pointer"
      onClick={() => router.back()}
    >
      <ChevronLeft size={20} />
      <span className="font-mono text-lg">Back</span>
    </Button>
  );
}
