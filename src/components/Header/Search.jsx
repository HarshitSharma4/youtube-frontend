import { Input } from "../index";
import { FaSearch } from "react-icons/fa";
function Search({ className = "" }) {
  return (
    <div
      className={`border-text border-2 flex items-center justify-center w-96  px-4 gap-4 ${className}`}
    >
      <FaSearch className="text-base" />
      <Input
        className="bg-background grow placeholder:text-xl"
        divClass="border-none"
        placeholder="Search ..."
      />
    </div>
  );
}

export default Search;
