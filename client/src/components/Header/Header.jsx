import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import style from "./Header.module.css";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import AuthContext from "../../Context/AuthContext";

function Header() {
  const { token, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  function back() {
    navigate("/");
    logOut();
  }

  return (
    <div className={style.wrapper}>
      <h1 onClick={back}>Hschool</h1>

      <div className={style.btns}>
        {!token ? (
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
            <Button variant="contained" className={style.singInBtn} onClick={back}>
              Sign Out
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
