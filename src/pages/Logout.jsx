import { useDispatch } from "react-redux";
import { Button } from "../components";
import { logout } from "../service/user";
import { logoutAuth } from "../store/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-xl font-bold flex w-full  overflow-y-auto p-7 ">
      <div className="grow">
        <h1 className="text-2xl text-start">Log Out</h1>
        <p className="text-lg py-4 text-start ">Click here to logout</p>
      </div>
      <div className="grow">
        <Button
          className="px-4 py-2 bg-accent shadow-none p-7 border-2 rounded-lg space-y-8 "
          onClick={() => {
            dispatch(logoutAuth());
            logout();
          }}
        >
          logout
        </Button>
      </div>
    </div>
  );
};

export default Logout;
