import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const Pagination = ({
  dataPerView,
  totalData,
  paginate,
  currentView,
}) => {
  const maxPages = 5;
  const totalPageCount = Math.ceil(totalData / dataPerView);
  const startIndex = Math.max(1, currentView - Math.floor(maxPages / 2));
  const endIndex = Math.min(totalPageCount, startIndex + maxPages - 1);
  const visiblePageNumbers = [];

  for (let i = startIndex; i <= endIndex; i++) {
    visiblePageNumbers.push(i);
  }

  return (
    <nav className="flex items-center justify-center py-6 gap-3 font-spiegel">
      <button
        type="button"
        className={`rounded-full p-1 flex items-center justify-center bg-gold text-black duration-200 ${
          currentView === 1 ? "cursor-default opacity-20" : ""
        }`}
        onClick={() => paginate(currentView - 1)}
        disabled={currentView === 1}
      >
        <MdKeyboardArrowLeft />
      </button>
      <span className="flex items-center justify-center text-gold duration-200 text-lg">
        {currentView} / {totalPageCount}
      </span>
      <button
        type="button"
        className={`rounded-full p-1 flex items-center justify-center bg-gold text-black duration-200 ${
          currentView === totalPageCount ? "cursor-default opacity-20" : ""
        }
          `}
        onClick={() => paginate(currentView + 1)}
        disabled={currentView === totalPageCount}
      >
        <MdKeyboardArrowRight />
      </button>
    </nav>
  );
};
