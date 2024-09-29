import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Logo, Input, Button, Loading } from "../index";
import { useState } from "react";
import { login } from "../../service/user";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../store/authSlice";
function LoginForm({ className = "" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const [isLoading ,setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = async (data) => {
    setError("");
    try {
      setIsLoading(true);
      console.log(data);
      const loginDetails = await login({ ...data });
      if (loginDetails?.data?.data?.user)
        dispatch(loginAuth(loginDetails.data.data.user));
      reset();
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      setError(error.message);
    }
  };
  if(isLoading){
    return <Loading />;
  }
  return (
    <div
      className={`w-[60%] border-2  bg-background shadow-lg shadow-secondary md:rounded-lg px-7 py-11 flex items-center flex-col ${className}`}
    >
      <div className="h-20 w-20 ">
        <Logo />
      </div>
      <h1 className="text-xl font-bold text-center">Login Form</h1>
      {error && (
        <h1 className="text-secondary mt-6 text-center text-lg">{error}</h1>
      )}
      <form onSubmit={handleSubmit(loginUser)} className="mt-8">
        <div className="space-y-5  flex flex-col items-center justify-center">
          <Input
            label="Email : "
            placeholder="Enter Your Email"
            type="Email"
            divClass="-translate-y-1 "
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <span className=" text-secondary text-base font-semibold">
              {errors.email.message}
            </span>
          )}
          <Input
            label="Password : "
            type="password"
            className=""
            divClass="-translate-y-1 "
            placeholder="Enter Your Password"
            {...register("password", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])(.{8,})$/,
                message:
                  "password should have  minimum length of 8 characters, at least one special character, and at least one uppercase and one lowercase letter",
              },
            })}
          />
          {errors.password && (
            <span className=" text-primary text-base w-[25rem] font-semibold">
              {errors.password.message}
            </span>
          )}
          <Button
            type="submit"
            className="text-base px-11 py-3 bg-accent shadow-primary"
          >
            Log In
          </Button>
        </div>
      </form>
      <hr className="w-full my-5" />
      <p className="text-base">Don't have an acount?</p>
      <Link to="/signup">
        <Button className="text-base px-11 py-3  bg-primary shadow-[#d1d0d0]">
          Sign up
        </Button>
      </Link>
    </div>
  );
}

export default LoginForm;
