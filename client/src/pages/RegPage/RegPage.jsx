import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../RegPage/RegPage.module.css";
import InputForm from "../../components/Input/InputForm";
import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";

function RegPage() {
  const [reqValue, setReqValue] = useState({ name: "", surname: "", email: "", pwd: "" });

  async function createUser() {
    const request = await axios.post("http://localhost:3001/api/reg", reqValue);
    console.log(request.data);
  }
  return (
    <>
      <Header />

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>

          <InputForm
            setReqValue={setReqValue}
            reqValue={reqValue}
            data={[
              { text: "name", type: "text" },
              { text: "surname", type: "text" },
              { text: "email", type: "text" },
              { text: "pwd", type: "password" },
            ]}
          />

          <Button variant="contained" size="large" className={style.loginBtn} onClick={createUser}>
            Sign Up
          </Button>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default RegPage;
