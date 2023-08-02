import style from "../Footer/style.module.css";

function Footer() {
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footerInfo}>
          <div className={style.footerInfoNav}>
            <p>Home</p>
            <p>Textbook</p>
            <p>Statistics</p>
            <p>Sprint</p>
          </div>

          <div className={style.footerInfoPeoples}>
            <p>Alex</p>
            <p>Gabriel</p>
            <p>Marcus</p>
          </div>
        </div>

        <div className={style.line}></div>

        <div className={style.footerContacts}>
          <div className={style.footerContactsImg}>
            <div className={style.gitImg}></div>
            <div className={style.gtImg}></div>
            <div className={style.youtubeImg}></div>
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
