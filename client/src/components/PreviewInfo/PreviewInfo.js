import style from "./style.module.css";

function PreviewInfo() {
  return (
    <>
      <div className={style.preview}>
        <div className={style.previewInfo}>
          <p className={style.discription}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.info}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <div className={style.btnInfo}>About platform</div>

          <div>
            <div>
              <div></div>
              <p>
                600 <span>+</span>
              </p>
            </div>
            <p>Students</p>
          </div>
        </div>

        <div className={style.previewGuy}></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
}

export default PreviewInfo;
