import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../RegPage/style.module.css";
import InputComp from "../../components/Input/InputComp";

function RegPage() {
  const inpData = [
    { text: "Name", type: "text" },
    { text: "Surname", type: "text" },
    { text: "Email", type: "text" },
    { text: "Password", type: "password" },
  ];
  return (
    <>
      <Header />

      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Sign Up</h1>

          <InputComp data={inpData} />

          <div className={style.loginBtn}>Sign Up</div>
        </div>

        <div className={style.loginImg}></div>
      </div>

      <Footer />
    </>
  );
}

export default RegPage;
