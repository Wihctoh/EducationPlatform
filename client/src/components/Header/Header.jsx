import React from "react";
import style from "./Header.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={style.wrapper}>
      <h1>
        <Link to={"/"}>Hschool</Link>
      </h1>

      <div className={style.btns}>
        <Link to={"/login"}>
          <Button variant="contained" className={style.singInBtn}>
            Login →
          </Button>
        </Link>
        <Link to={"/signup"}>
          <Button variant="contained" className={style.singInBtn}>
            Sign Up
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
