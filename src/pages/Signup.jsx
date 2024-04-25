import React from "react";
import { SignupForm } from "../components/index";
function Signup() {
  return (
    <div className="fixed h-screen w-screen flex justify-center items-center top-0 left-0 bg-gradient-to-r from-[rgba(0,0,0,0.4)] to-[rgba(100,43,234,0.4)]">
      <SignupForm />
    </div>
  );
}

export default Signup;
