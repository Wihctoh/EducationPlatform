import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../LoginPage/style.module.css";
import InputComp from "../../components/Input/InputComp";

function LoginPage() {
  const inpData = [
    { text: "Email", type: "text" },
    { text: "Password", type: "password" },
  ];
  return (
    <>
      <Header />
      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          <InputComp data={inpData} />

          <div className={style.loginBtn}>Login</div>
        </div>

        <div className={style.loginImg}></div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
