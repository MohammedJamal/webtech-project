import { useEffect } from "react";
import { useSearch } from "../../hooks/"; // Custom hooks
import { HiOutlineSearch } from "react-icons/hi";
import IconButton from "@mui/material/IconButton";
import Backdrop from "@mui/material/Backdrop";
import { searchAnimation} from "../../utils/animation";

const SearchModal = ({ isSearchOpen, closeSearch }) => {
  return (
    <div>
      <div className="fixed top-1/2 left-1/2 flex flex-col -translate-x-1/2 -translate-y-1/2 z-30">
        <div id="search" className=" relative">
          <input
            type="text"
            name="search"
            placeholder="ค้นหา"
            className={`bg-[#ECEFF1] focus:bg-white/60 text-xl rounded-full pl-12 p-4 outline-none w-[75vw] max-w-[40em] text-[#546E7A] focus:text-bluegrey-dark-4 transition-all focus:shadow-realistic-1 focus:ring-2 ring-offset-4 duration-100 ring-offset-white `}
          />
          <HiOutlineSearch className="absolute text-2xl top-1/2 left-3 transform -translate-y-1/2 pointer-events-none " />
        </div>
        {/* <div className="w-[75vw] max-w-[40em] bg-white mt-6 rounded-lg p-4">
              <p>Smth</p>
            </div> */}
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: "20", backdropFilter: "blur(10px)" }}
        open={isSearchOpen}
        onClick={closeSearch}
      />
    </div>
  );
};

const Search = () => {
  const { closeSearch, toggleSearch, isSearchOpen } = useSearch(false);

  useEffect(() => {
    if (isSearchOpen) searchAnimation();
  }, [isSearchOpen]);

  return (
    <>
      <IconButton
        onClick={() => {
          toggleSearch();
        }}
        id="search-modal"
        size="medium"
      >
        <HiOutlineSearch className="text-lg lg:text-2xl text-[#546E7A]" />
      </IconButton>

      {isSearchOpen && (
        <SearchModal closeSearch={closeSearch} isSearchOpen={isSearchOpen} />
      )}
    </>
  );
};

export default Search;
