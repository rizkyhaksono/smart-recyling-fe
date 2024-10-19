"use client";

import { useState, useEffect, useMemo } from "react";
import Cookies from "universal-cookie";
import { useGetUserQuery } from "../../redux/api/userApi";

const useCheckToken = () => {
  const cookies = useMemo(() => new Cookies(), []);
  const [userRole, setUserRole] = useState(null);

  const accessToken = cookies.get("access_token");

  const { data: userData, isSuccess: userSuccess } = useGetUserQuery(undefined, {
    skip: !accessToken,
  });

  useEffect(() => {
    if (accessToken && userSuccess && userData?.user?.role) {
      setUserRole(userData.user.role);
      cookies.set("user_role", userData.user.role);
    }
  }, [accessToken, userSuccess, userData, cookies]);

  if (accessToken) {
    return userData;
  }

  return userRole;
};

export default useCheckToken;
