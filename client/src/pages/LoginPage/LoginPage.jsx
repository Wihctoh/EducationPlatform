import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../LoginPage/LoginPage.module.css";
import InputForm from "../../components/Input/InputForm";
import { Button } from "@mui/material";
import { useState } from "react";
import Alerts from "../../components/Alert/Alert";

function LoginPage() {
  const [alert, setAlert] = useState();

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

          <Button
            variant="contained"
            size="large"
            className={style.loginBtn}
            onClick={() => setAlert(<Alerts />)}
          >
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
