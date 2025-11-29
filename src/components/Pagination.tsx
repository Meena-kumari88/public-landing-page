type PaginationProps = {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  pageSizeOptions: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange: (value: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  pageSizeOptions,
  onPageChange,
  onPageSizeChange,
}: PaginationProps) {
  const pageNumbers: (number | string)[] = [];

  if (totalPages <= 7) {
    // Show all pages if total is small
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    // Always show first page
    pageNumbers.push(1);

    // Determine start and end for middle pages
    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis if needed
    if (start > 2) pageNumbers.push("...");
    for (let i = start; i <= end; i++) pageNumbers.push(i);
    if (end < totalPages - 1) pageNumbers.push("...");

    // Always show last page
    pageNumbers.push(totalPages);
  }

  return (
    <div className="w-full mt-8 px-2">
      <div className="flex flex-wrap justify-center sm:justify-end items-center gap-1 px-2 py-3 rounded-md">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="w-8 h-8 text-md rounded flex items-center justify-center text-black disabled:opacity-40"
          disabled={currentPage === 1}
        >
          &#x2039;
        </button>

        {/* Page Numbers */}
        {pageNumbers.map((page, idx) =>
          page === "..." ? (
            <span key={idx} className="px-1 text-gray-500">
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium ${
                currentPage === page
                  ? "bg-[#2827AA] text-white"
                  : "text-gray-700"
              }`}
            >
              {page}
            </button>
          )
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="w-8 h-8 rounded flex items-center justify-center text-black disabled:opacity-40"
          disabled={currentPage === totalPages}
        >
          &#x203A;
        </button>

        {/* Page Size Dropdown */}
        <select
          value={itemsPerPage}
          onChange={(e) => onPageSizeChange(Number(e.target.value))}
          className="ml-3 border border-gray-300 rounded px-2 py-1 text-sm bg-white shadow-sm focus:outline-none"
        >
          {pageSizeOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt} Per Page
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
