import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InputForm from "../../components/Input/InputForm";
import style from "../LoginPage/LoginPage.module.css";
import { Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../components/Alert/ErrorAlert";

function LoginPage() {
  const navigate = useNavigate();
  const [reqValue, setReqValue] = useState({ email: "", pwd: "" });
  const [erMess, setErMess] = useState("");

  async function login() {
    try {
      await axios.post("http://localhost:3001/api/auth", reqValue);

      navigate("/students");
    } catch (error) {
      setErMess(error.response.data);
    }
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

          {erMess && <ErrorAlert sendMess={erMess} />}

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
