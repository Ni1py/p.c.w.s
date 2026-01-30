"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useSearchParams } from "next/navigation";
import { NAVIGATION_PARAMS } from "@/lib/constants";
import React from "react";

interface IPaginationComponentProps {
  totalPages: number;
}

export function PaginationComponent({ totalPages }: IPaginationComponentProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get(NAVIGATION_PARAMS.PAGE)) || 1;

  const getPageHref = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(NAVIGATION_PARAMS.PAGE, pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const paginationArr = React.useMemo(() => {
    const delta = 1;
    const range = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }

    return range;
  }, [totalPages, currentPage]);

  return (
    <Pagination>
      <PaginationContent className="font-mono">
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={getPageHref(currentPage - 1)} />
          </PaginationItem>
        )}
        {paginationArr.map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={getPageHref(Number(pageNumber))}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={getPageHref(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
