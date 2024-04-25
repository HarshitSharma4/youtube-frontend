import { IoPlayOutline } from "react-icons/io5";
function Empty({ title, message }) {
  return (
    <div className="flex flex-col gap-4 w-full py-12 justify-center items-center m-7">
      <div className="w-16 h-16 rounded-[100%] bg-accent flex items-center justify-center">
        <IoPlayOutline className="text-primary font-extrabold translate-x-1" />
      </div>
      <h1 className="text-xl font-semibold">{title}</h1>
      <p className="text-xl font-semibold w-[27rem]">{message}</p>
    </div>
  );
}

export default Empty;
