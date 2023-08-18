import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputForm from "../../components/Input/InputForm";
import style from "../LoginPage/LoginPage.module.css";
import { Button } from "@mui/material";
import ErrAlert from "../../components/Alert/ErrorAlert";
import { useState } from "react";
import axios from "axios";
import SuccessAlert from "../../components/Alert/SuccessAlert";

function LoginPage() {
  const [authAlert, setAuthAlert] = useState();

  async function request() {
    const response = await axios.get("http://localhost:3001");

    response.data.length
      ? setAuthAlert(<SuccessAlert sendMess={"Success Login"} />)
      : setAuthAlert(<ErrAlert sendMess={"Login Error! Check Email of Password."} />);
  }

  return (
    <>
      <Header />
      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          <InputForm
            data={[
              { text: "Email*", type: "text" },
              { text: "Password*", type: "password" },
            ]}
          />

          {authAlert}

          <Button variant="contained" size="large" className={style.loginBtn} onClick={request}>
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
