import React, { useState, useEffect } from "react";
import { PaginationProps } from "../../Interfaces";
import "./index.scss";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const range = (from: any, to: any, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};
const Pagination = (props: PaginationProps) => {
  useEffect(() => {
    gotoPage(1);
  }, []);
  const { totalRecords, pageLimit, pageNeighbours } = props;
  const totalPages = Math.ceil(totalRecords / pageLimit);

  const [currentPage, setCurrentPage] = useState(1 as number);
  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const totalNumbers = pageNeighbours * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (!totalRecords || totalPages === 1) return null;
  const pages = fetchPageNumbers();
  const gotoPage = (page: any) => {
    const { onPageChanged = (f: any) => f } = props;

    const currentPage = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords
    };
    setCurrentPage(currentPage);
    props.onPageChanged(paginationData);
  };

  const handleClick = (page: any) => (evt: any) => {
    evt.preventDefault();
    gotoPage(page);
  };

  const handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (evt: any) => {
    evt.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };
  return (
    <div className="pagination-wrapper">
      <div className="pagination">
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <div key={index} className="pagination-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Previous"
                  onClick={handleMoveLeft}
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </div>
            );

          if (page === RIGHT_PAGE)
            return (
              <div key={index} className="pagination-item">
                <a
                  className="page-link"
                  href="#"
                  aria-label="Next"
                  onClick={handleMoveRight}
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </div>
            );

          return (
            <div
              key={index}
              className={`pagination-item${
                currentPage === page ? " active" : ""
              }`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => handleClick(page)}
              >
                {page}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
