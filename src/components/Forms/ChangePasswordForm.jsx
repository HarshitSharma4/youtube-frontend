import { useForm } from "react-hook-form";
import { Button, Input } from "../index";
import { changePassword } from "../../service/user";
import { toast } from "react-toastify";

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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
      await changePassword({ ...data });
      notify("Password changed success", "success");
      reset();
    } catch (err) {
      notify("Failed to change password", "error");
      console.error("Error occurred while changing password:", err);
    }
  };

  return (
    <div className="text-xl font-bold flex w-full h-[calc(100vh-9.8rem)] overflow-y-auto p-7 ">
      <div className="grow">
        <h1 className="text-2xl text-start">Change Password</h1>
      </div>
      <div className="grow">
        <form
          onSubmit={handleSubmit(changePwd)}
          className="p-7 border-2 rounded-lg space-y-8 "
        >
          <Input
            label="Old Password : "
            type="password"
            className=""
            divClass="-translate-y-1 "
            placeholder="Enter Your old Password"
            {...register("oldPassword", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])(.{8,})$/,
                message:
                  "Password should have minimum length of 8 characters, at least one special character, and at least one uppercase and one lowercase letter",
              },
            })}
          />
          {errors?.oldPassword && (
            <span className="text-accent text-base w-[25rem] font-semibold">
              {errors.oldPassword.message}
            </span>
          )}
          <Input
            label="New Password : "
            type="password"
            className=""
            divClass="-translate-y-1 "
            placeholder="Enter Your New Password"
            {...register("newPassword", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])(.{8,})$/,
                message:
                  "Password should have minimum length of 8 characters, at least one special character, and at least one uppercase and one lowercase letter",
              },
            })}
          />
          {errors?.newPassword && (
            <span className="text-accent text-base w-[25rem] font-semibold">
              {errors.newPassword.message}
            </span>
          )}
          <Input
            label="Confirm Password : "
            type="password"
            className=""
            divClass="-translate-y-1 "
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+,\-./:;<=>?@[\\\]^_`{|}~])(.{8,})$/,
                message:
                  "Password should have minimum length of 8 characters, at least one special character, and at least one uppercase and one lowercase letter",
              },
            })}
          />
          {errors?.confirmPassword && (
            <span className="text-accent block text-base w-[24rem] text-center font-semibold">
              {errors.confirmPassword.message}
            </span>
          )}
          <div className="p-7">
            <Button type="submit" className="px-4 py-2 bg-accent shadow-none">
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordForm;
