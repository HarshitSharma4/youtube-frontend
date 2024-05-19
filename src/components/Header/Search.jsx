import { useNavigate } from "react-router-dom";
import { Input } from "../index";
import { FaSearch } from "react-icons/fa";
function Search({ className = "" }) {
  const navigate = useNavigate();
  const searchText = (e)=>{
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      console.log("searc h",e.target.value);
      navigate(`/search/${e.target.value}`);
    }
    console.log(e.target.value + e.key);
  }
  return (
    <div
      className={`border-text border-2 flex items-center justify-center w-96  px-4 gap-4 ${className}`}
    >
      <FaSearch className="text-base" />
      <Input
        className="bg-background grow placeholder:text-xl"
        divClass="border-none"
        placeholder="Search ..."
        
        onKeyPress = {(e)=>{searchText(e);}}
      />
    </div>
  );
}

export default Search;
