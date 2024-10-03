import { useSelector } from "react-redux";
import { getCurrentUser } from "../service/user";
import { useEffect, useState } from "react";
import {
  Profile,
  TabBar,
  Deshboard,
  PersonalInfoForm,
  Loading,
} from "../components/index";
import {Logout} from "./index"
import ChangePasswordForm from "../components/Forms/ChangePasswordForm";
function Setting() {
  const [isLoading, setIsLoading] = useState(true);

  const userData = useSelector((state) => state.auth.userData);
  const [userDetails, setUserDetails] = useState([]);
  const [tab, setTab] = useState("Dashboard");
  useEffect(() => {
    if (userData) {
      getCurrentUser()
        .then((responce) => {
          console.log("responce ->", responce);
          setUserDetails(responce.data.data);

          console.log("user Channel", isUserChannel);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }
  }, [userData]);
  if (isLoading) return <Loading />;
  return (
    <>
      <Profile
        {...userDetails}
        setUserDetails={setUserDetails}
        isUserChannel={true}
      />
      <TabBar
        tab={tab}
        setTab={setTab}
        options={["Dashboard", "Personal Infromation", "Change Password"]}
      />
      {tab === "Dashboard" && <Deshboard />}
      {tab === "Personal Infromation" && (<div className="h-[calc(100vh-9.8rem)] overflow-y-auto" >
        <PersonalInfoForm {...userDetails} setUserDetails={setUserDetails} />
        <Logout />
        </div>
      )}
      {tab === "Change Password" && <ChangePasswordForm />}
    </>
  );
}

export default Setting;
