import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
}

export default function TablePagination(props: Props) {
  const { currentPage, totalPages } = props;

  const renderPageNumbers = () => {
    const items = [];
    const currentPath = "/admin/tickets";

    // Previous
    items.push(
      <PaginationItem key="prev">
        <PaginationPrevious 
          href={`${currentPath}?page=${currentPage - 1}`}
          className={currentPage <= 1 ? "pointer-events-none opacity-50" : ""}
        >
          Anterior
        </PaginationPrevious>
      </PaginationItem>
    );

    // First page
    items.push(
      <PaginationItem key={1}>
        <PaginationLink href={`${currentPath}?page=1`} isActive={currentPage === 1}>
          1
          </PaginationLink>
        </PaginationItem>
      );

    // Left ellipsis
    if (currentPage > 2) {
      items.push(
        <PaginationItem key="leftEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Current page
    if (currentPage !== 1 && currentPage !== totalPages) {
      items.push(
        <PaginationItem key={currentPage}>
          <PaginationLink href={`${currentPath}?page=${currentPage}`} isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Right ellipsis
    if (currentPage < totalPages - 1) {
      items.push(
        <PaginationItem key="rightEllipsis">
          <PaginationEllipsis />
        </PaginationItem>
      );
    }

    // Last page
    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink 
            href={`${currentPath}?page=${totalPages}`}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    // Next
    items.push(
      <PaginationItem key="next">
        <PaginationNext 
          href={`${currentPath}?page=${currentPage + 1}`}
          className={currentPage >= totalPages ? "pointer-events-none opacity-50" : ""}
        >
          Siguiente
        </PaginationNext>
      </PaginationItem>
    );

    return items;
  };

  return (
    <Pagination>
      <PaginationContent className="bg-background rounded-lg p-2">
        {renderPageNumbers()}
      </PaginationContent>
    </Pagination>
  );
}