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
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalCount: number;
}

export default function TripPagination({
  currentPage,
  totalCount,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  // console.log("total pages", totalPages);
  // console.log("params", searchParams.toString());

  const handlePageChange = (newPageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("page", newPageNumber.toString());
    router.push(`/bookings?${params.toString()}`);
  };

  if (totalPages <= 1) return;

  // const starsArray = Array.from({ length: 5 }, () => "*");
  // console.log("stars array", starsArray);

  return (
    <div className="flex justify-center mt-6">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => {
                if (currentPage > 1) handlePageChange(currentPage - 1);
              }}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }, (_, index) => (
            <>
              <PaginationItem>
                <PaginationLink
                  //   href="#"
                  isActive={currentPage === index + 1}
                  onClick={() => {
                    handlePageChange(index + 1);
                  }}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            </>
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
                if (currentPage < totalPages) {
                  handlePageChange(currentPage + 1);
                }
              }}
              className={`${currentPage < totalPages ? "cursor-pointer" : "cursor-not-allowed"}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
