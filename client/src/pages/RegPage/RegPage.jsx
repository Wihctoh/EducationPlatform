import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../RegPage/RegPage.module.css";
import InputForm from "../../components/Input/InputForm";
import { Button } from "@mui/material";

function RegPage() {
  return (
    <>
      <Header />

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>

          <InputForm
            data={[
              { text: "Name*", type: "text" },
              { text: "Surname*", type: "text" },
              { text: "Email*", type: "text" },
              { text: "Password*", type: "password" },
            ]}
          />

          <Button variant="contained" size="large" className={style.loginBtn}>
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
