import Cookie from "js-cookie";
import { useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState("");

  function login() {
    setToken(Cookie.get("access_token"));
  }
  function logOut() {
    Cookie.remove("access_token");
    setToken(null);
  }

  return { token, login, logOut };
}
