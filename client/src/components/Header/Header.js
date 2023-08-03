import style from "./style.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.wrapper}>
      <h1>
        <Link to={"/"}>Hschool</Link>
      </h1>

      <div className={style.btns}>
        <div className={style.logo}>
          <Link to={"/login"}> Login →</Link>
        </div>
        <div className={style.singInBtn}>
          <Link to={"/registration"}> Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
