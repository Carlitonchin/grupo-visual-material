"use client";
import { Container, Grid } from "@mui/material";
import MKPagination from "../../../components/MKPagination";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
  const pages = pageToShow(page, pageCount);
  return (
    <Container sx={{ height: "100%" }}>
      <Grid
        container
        item
        justifyContent="center"
        xs={12}
        lg={6}
        mx="auto"
        height="100%"
      >
        <MKPagination>
          {page > 1 && (
            <a href={`/blog/page/${page - 1}`}>
              <MKPagination item>
                <KeyboardArrowLeftIcon />
              </MKPagination>
            </a>
          )}
          {!pages.includes(1) && (
            <>
              <a className="hidden sm:inline" href={`/blog/page/1`}>
                <MKPagination item>1</MKPagination>
              </a>
              {!pages.includes(2) && (
                <span className="hidden sm:inline">...</span>
              )}
            </>
          )}

          {pages.map((currentPage) => (
            <a
              key={currentPage}
              href={
                currentPage == page ? undefined : `/blog/page/${currentPage}`
              }
            >
              <MKPagination
                item
                className={currentPage == page ? "bg-black" : ""}
                active={currentPage == page}
              >
                {currentPage}
              </MKPagination>
            </a>
          ))}
          {!pages.includes(pageCount) && (
            <>
              {!pages.includes(pageCount - 1) && (
                <span className="hidden sm:inline">...</span>
              )}
              <a className="hidden sm:inline" href={`/blog/page/${pageCount}`}>
                <MKPagination item>{pageCount}</MKPagination>
              </a>
            </>
          )}
          {page < pageCount && (
            <>
              <a href={`/blog/page/${page + 1}`}>
                <MKPagination item>
                  <KeyboardArrowRightIcon />
                </MKPagination>
              </a>
            </>
          )}
        </MKPagination>
      </Grid>
    </Container>
  );
}
