import  { useState, useEffect } from "react";
import { User } from "../components/interfaces/IUser";

const useAuth = () => {
  const [userAuth, setUserAuth] = useState<User>({
    username: "",
    password: "",
  });

  const loginUser = (value: User): void => {
    setUserAuth(value);
    localStorage.setItem("auth", JSON.stringify(value));
  };

  const userCurrent = (): User => {
    return userAuth;
  };

  useEffect(() => {
    const userLocal = localStorage.getItem("auth") || "";
    if (userLocal !== "") setUserAuth(JSON.parse(userLocal));
  }, []);

  return {
    userAuth,
    loginUser,
    userCurrent,
  };
};

export default useAuth;
