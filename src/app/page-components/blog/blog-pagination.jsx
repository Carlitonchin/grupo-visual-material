"use client";
import { Pagination } from "@nextui-org/pagination";

function pageToShow(page, pageCount) {
  if (pageCount <= 5)
    return new Array(pageCount).fill(0).map((_, index) => index + 1);

  let currentPage = page - 2;
  let pages = [];

  while (pages.length < 5 && currentPage <= pageCount) {
    if (currentPage >= 1) pages.push(currentPage);

    currentPage++;
  }

  while (pages.length < 5) pages = [pages[0] - 1].concat(pages);

  return pages;
}

export default function BlogPagination({ page, pageCount }) {
  return (
    <div className="w-full flex justify-center">
      <Pagination
        initialPage={1}
        page={page}
        color="#000"
        total={pageCount}
        showControls
        onChange={(newPage) =>
          (document.location.href = `/blog/page/${newPage}`)
        }
      />
    </div>
  );
}
