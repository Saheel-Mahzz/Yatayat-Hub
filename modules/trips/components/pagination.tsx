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
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalCount: number;
}

export default function TripPagination({ totalCount }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const ITEMS_PER_PAGE = 5;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const handlePageChange = (newPageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", newPageNumber.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  const currentPageNumber = Number(searchParams.get("page")) || 1;

  if (totalPages <= 1) return;

  // const starsArray = Array.from({ length: 5 }, () => "*");

  return (
    <div className="flex justify-center mt-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (currentPageNumber > 1)
                  handlePageChange(currentPageNumber - 1);
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                //   href="#"
                isActive={currentPageNumber === index + 1}
                onClick={() => {
                  handlePageChange(index + 1);
                }}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {/* 
          <PaginationItem>
            <PaginationLink
              //   href="#"
              isActive={currentPage === 1}
              onClick={() => {
                handlePageChange(1);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              isActive={currentPage === 2}
              onClick={() => {
                handlePageChange(2);
              }}
            >
              2
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              isActive={currentPage === 3}
              onClick={() => {
                handlePageChange(3);
              }}
            >
              3
            </PaginationLink>
          </PaginationItem> */}

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={() => {
                if (currentPageNumber < totalPages) {
                  handlePageChange(currentPageNumber + 1);
                }
              }}
              className={`${currentPageNumber < totalPages ? "cursor-pointer" : "cursor-not-allowed"}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
