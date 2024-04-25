import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Logo } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAuth } from "../../store/authSlice";
import { register as registerUser } from "../../service/user";
function SignupForm({ className = "" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const registerForm = async (data) => {
    setError("");
    try {
      console.log(data);
      const signup = await registerUser({
        ...data,
        avatar: data.avatar[0],
        coverImage: data.coverImage ? data.coverImage[0] : undefined,
      });
      console.log(signup);
      if (signup?.data?.data) dispatch(loginAuth(signup.data.data));
      reset();
      navigator("/");
    } catch (error) {
      setError(error?.message);
    }
  };
  return (
    <div
      className={`w-[65%] border-2  bg-background shadow-lg shadow-secondary md:rounded-lg px-7 py-4 flex items-center flex-col ${className}`}
    >
      <div className="h-14 w-14 ">
        <Logo />
      </div>
      <h1 className="text-xl font-bold text-center">Create New Acount</h1>
      {error && (
        <h1 className="text-secondary mt-6 text-lg text-center">{error}</h1>
      )}
      <form
        onSubmit={handleSubmit(registerForm)}
        encType="multipart/form-data"
        className="mt-8"
      >
        <div className="flex flex-col items-center justify-center">
          <Input
            label="Name : "
            placeholder="Enter your Name"
            type="text"
            divClass="-translate-y-1"
            {...register("fullName", {
              required: true,
            })}
          />
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
            <span className=" text-accent text-base font-semibold">
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
            <span className=" text-accent text-base w-[25rem] font-semibold">
              {errors.password.message}
            </span>
          )}
          <Input
            label="Username : "
            placeholder="Enter your Name"
            type="text"
            divClass="-translate-y-1"
            {...register("userName", {
              required: true,
            })}
          />
          <Input
            label="Avatar : "
            placeholder="Enter your Name"
            type="file"
            accept="image/png , image/jpg, image/jpeg, image/gif"
            divClass="-translate-y-1"
            {...register("avatar", {
              required: true,
            })}
          />
          <Input
            label="cover Image(optional) : "
            placeholder="Enter your Name"
            type="file"
            accept="image/png , image/jpg, image/jpeg, image/gif"
            divClass="-translate-y-1"
            {...register("coverImage", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="text-base px-11 py-3 my-2 bg-accent shadow-primary"
          >
            Sign In
          </Button>
        </div>
      </form>
      <hr className="w-full my-5" />
      <p className="text-base">Do have an acount?</p>
      <Link to="/login">
        <Button className="text-base px-11 py-3  bg-primary shadow-[#d1d0d0]">
          Log In
        </Button>
      </Link>
    </div>
  );
}

export default SignupForm;
