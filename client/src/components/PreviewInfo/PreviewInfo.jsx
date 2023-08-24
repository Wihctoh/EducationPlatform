import style from "./style.module.css";
import { Link } from "react-router-dom";

function PreviewInfo() {
  return (
    <>
      <div className={style.preview}>
        <div className={style.previewInfo}>
          <p className={style.description}>E-COURSE PLATFORM</p>
          <h1>Learning and teaching online, made easy.</h1>
          <p className={style.info}>
            Any subject, in any language, on any device, for all ages!
          </p>
          <Link to={"#!"}>
            <div className={style.btnInfo}>About platform</div>
          </Link>

          <div className={style.students}>
            <div className={style.studentsCounts}>
              <div className={style.lightning}></div>
              <div className={style.numberPlus}>600</div>
            </div>
            <p>Students</p>
          </div>
        </div>

        <div className={style.previewGuy}></div>
      </div>

      <div className={style.wrapper}>
        <div className={style.learnLang}>
          <div className={style.learnLangImg}></div>

          <div className={style.learnLangDescription}>
            <h1>Learn a language in a playful way</h1>
            <p>Make learning programming languages more fun with mini-games</p>

            <div className={style.learnLangDescriptionImg}>
              <div className={style.learnLangDescriptionImgSprint}></div>
              <div className={style.learnLangDescriptionImgTasks}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.knowledge}>
        <div className={style.knowledgeDescription}>
          <h1>Increase your knowledge</h1>
          <p>Traditional and new effective approaches to learning languages</p>

          <Link to={"#!"}>
            <div className={style.knowledgeDescriptionBtn}>Textbook →</div>
          </Link>
        </div>

        <div className={style.knowledgeImg}></div>
      </div>

      <div className={style.wrapper}>
        <div className={style.watchProgress}>
          <div className={style.watchProgressImg}></div>

          <div className={style.watchProgressDescription}>
            <h1>Watch your progress every day</h1>
            <p>Save statistics on your achievements and mistakes</p>

            <Link to={"#!"}>
              <div className={style.watchProgressDescriptionBtn}>
                Statistics →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewInfo;
