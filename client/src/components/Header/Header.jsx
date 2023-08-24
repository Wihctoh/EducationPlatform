import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";

function Header({ isAuth }) {
  return (
    <div className={style.wrapper}>
      <h1>
        <Link to={"/"}>Hschool</Link>
      </h1>

      <div className={style.btns}>
        {!isAuth ? (
          <>
            <Link to={"/login"}>
              <Button variant="contained" endIcon={<LoginIcon />} className={style.singInBtn}>
                Login
              </Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="contained" className={style.singInBtn}>
                Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/"}>
              <Button variant="contained" className={style.singInBtn}>
                Sign Out
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
