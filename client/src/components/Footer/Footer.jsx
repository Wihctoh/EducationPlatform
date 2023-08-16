import style from "./style.module.css";
import Options from "./Options";
import Icons from "./Icons";

function Footer() {
  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footerInfo}>
          <div className={style.footerInfoNav}>
            <Options data={["Home", "Textbook", "Statistics", "Sprint"]} />
          </div>

          <div className={style.footerInfoPeoples}>
            <Options data={["Alex", "Gabriel", "Marcus"]} />
          </div>
        </div>

        <div className={style.line}></div>

        <div className={style.footerContacts}>
          <div className={style.footerContactsImg}>
            <Icons data={["gitImg", "gtImg", "youtubeImg"]} />
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
