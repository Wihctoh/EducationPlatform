import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import style from "../RegPage/style.module.css";

function RegPage() {
  return (
    <>
      <Header />
      <div className={style.login}>
        <div className={style.loginForm}>
          <h1>Login</h1>

          <div>
            <input type="text" placeholder="Name"></input>
          </div>
          <div>
            <input type="text" placeholder="Surname"></input>
          </div>
          <div>
            <input type="password" placeholder="Password"></input>
          </div>
          <div>
            <input type="password" placeholder="Confirm Password"></input>
          </div>

          <div className={style.loginBtn}>Sign Up</div>
        </div>

        <div className={style.loginImg}></div>
      </div>
      <Footer />
    </>
  );
}

export default RegPage;
