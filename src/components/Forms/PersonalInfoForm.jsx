import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import { updateUserDetails } from "../../service/user";
import { toast } from "react-toastify";

function PersonalInfoForm({ fullName, email, userName, setUserDetails }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      fullName,
      userName,
      email,
    },
  });

  const notify = (message, type) => {
    toast[type](message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const changePwd = async (data) => {
    try {
      const user = await updateUserDetails(data);
      if (user.data) setUserDetails(user.data);
      notify("Details changed success", "success");
      reset();
    } catch (err) {
      notify("Failed to change password", "error");
      console.error("Error occurred while changing Details:", err);
    }
  };

  return (
    <div className="text-xl font-bold flex w-full  p-7 ">
      <div className="grow">
        <h1 className="text-2xl text-start">Personal Info</h1>
        <p className="text-lg py-4 text-start ">
          Update your personal details.
        </p>
      </div>
      <div className="grow">
        <form
          onSubmit={handleSubmit(changePwd)}
          className="p-7 border-2 rounded-lg space-y-8 "
        >
          <Input
            label="Name : "
            type="text"
            placeholder="Enter Your Name"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && (
            <span className="text-accent text-base w-[25rem] font-semibold">
              Name is required
            </span>
          )}
          <Input
            label="User Name : "
            type="text"
            placeholder="Enter Your User Name"
            {...register("userName", { required: true })}
          />
          {errors.userName && (
            <span className="text-accent text-base w-[25rem] font-semibold">
              User Name is required
            </span>
          )}
          <Input
            label="Email : "
            type="email"
            placeholder="Enter your Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-accent block text-base w-[24rem] text-center font-semibold">
              Email is required
            </span>
          )}
          <div className="p-7">
            <Button type="submit" className="px-4 py-2 bg-accent shadow-none">
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalInfoForm;
