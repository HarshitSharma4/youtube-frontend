const Button = ({ children, className = "", type = "button", ...prop }) => {
  return (
    <button
      type={type}
      className={`rounded-sm shadow-[5px_5px_0px_0px] transition-all duration-150 ease-in-out active:translate-x-[5px] active:translate-y-[5px] active:shadow-[0px_0px_0px_0px] ${className}`}
      {...prop}
    >
      {children}
    </button>
  );
}

export default Button;
