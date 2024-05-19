import { useSelector } from "react-redux";
import { getCurrentUser } from "../service/user";
import { useEffect, useState } from "react";
import { Profile, TabBar } from "../components/index";
import PersonalInfoForm from "../components/Forms/PersonalInfoForm";
import ChangePasswordForm from "../components/Forms/ChangePasswordForm";
function Setting() {
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
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userData]);
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
      {tab === "Dashboard" && <h1>deshboard</h1>}
      {tab === "Personal Infromation" && (
        <PersonalInfoForm {...userDetails} setUserDetails={setUserDetails} />
      )}
      {tab === "Change Password" && <ChangePasswordForm />}
    </>
  );
}

export default Setting;
