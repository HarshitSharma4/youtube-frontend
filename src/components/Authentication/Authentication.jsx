import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../Loading/Uploading";

const Authentication = ({ authentication = true, children }) => {
  const [loading, setLoading] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (authentication && !authStatus) {
      navigate("/login");
    }

    setLoading(false);
  }, [authStatus, authentication, navigate]);

  return loading ? <Loading /> : <>{children}</>;
};

export default Authentication;
