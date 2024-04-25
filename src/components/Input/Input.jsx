import React, { useId } from "react";

function Input(
  { label = "", type = "text", className = "", divClass = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full flex gap-4 justify-start items-center ">
      {label && (
        <label className="text-2xl font-semibold w-fit" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={`flex-grow border-b-2 ${divClass}`}>
        <input
          type={type}
          className={`w-full h-full p-1 text-2xl outline-none font-semibold bg-background ${className}`}
          ref={ref}
          {...props}
          id={id}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
