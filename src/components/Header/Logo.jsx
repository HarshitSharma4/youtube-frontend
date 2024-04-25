import logo from "../../assets/logo.svg";

function Logo({ className = "" }) {
  return (
    <div className={`${className} overflow-hidden`}>
      <img src={logo} alt="Logo" className="object-cover " />
    </div>
  );
}

export default Logo;
