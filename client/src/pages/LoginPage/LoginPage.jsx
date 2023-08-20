import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputForm from "../../components/Input/InputForm";
import style from "../LoginPage/LoginPage.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";

function LoginPage() {
  const [reqValue, setReqValue] = useState({ email: "", pwd: "" });

  async function login() {
    const request = await axios.post("http://localhost:3001/api/auth", reqValue);
    console.log(request.data);
  }

  return (
    <>
      <Header />
      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          <InputForm
            setReqValue={setReqValue}
            reqValue={reqValue}
            data={[
              { text: "email", type: "text" },
              { text: "pwd", type: "password" },
            ]}
          />

          <Button variant="contained" size="large" className={style.loginBtn} onClick={login}>
            Login
          </Button>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default LoginPage;
