import style from "./style.module.css";

function Header() {
  return (
    <div className={style.wrapper}>
      <h1>Hschool</h1>

      <div className={style.btns}>
        <div className={style.logo}>Login →</div>
        <div className={style.singInBtn}>Sign Up</div>
      </div>
    </div>
  );
}

export default Header;
