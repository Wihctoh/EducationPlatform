import style from "../Footer/style.module.css";

function Footer() {
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footerInfo}>
          <div className={style.footerInfoNav}>
            {["Home", "Textbook", "Statistics", "Sprint"].map((el) => (
              <p>{el}</p>
            ))}
          </div>

          <div className={style.footerInfoPeoples}>
            {["Alex", "Gabriel", "Marcus"].map((el) => (
              <p>{el}</p>
            ))}
          </div>
        </div>

        <div className={style.line}></div>

        <div className={style.footerContacts}>
          <div className={style.footerContactsImg}>
            {["gitImg", "gtImg", "youtubeImg"].map((el) => (
              <div className={style[el]}></div>
            ))}
          </div>

          <p>
            ©2021 Hschool. Project for <span>Hschool</span>.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
