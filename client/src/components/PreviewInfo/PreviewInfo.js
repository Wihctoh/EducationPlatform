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

          <div className={style.learnLangDiscr}>
            <h1>Learn a language in a playful way</h1>
            <p>Make learning programming languages more fun with mini-games</p>

            <div className={style.learnLangDiscrImg}>
              <div className={style.learnLangDiscrImgSprint}></div>
              <div className={style.learnLangDiscrImgTasks}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.knowledge}>
        <div className={style.knowledgeDiscription}>
          <h1>Increase your knowledge</h1>
          <p>Traditional and new effective approaches to learning languages</p>

          <div className={style.knowledgeDiscriptionBtn}>Textbook →</div>
        </div>

        <div className={style.knowledgeImg}></div>
      </div>

      <div className={style.wrapper}>
        <div className={style.watchProgress}>
          <div className={style.watchProgressImg}></div>

          <div className={style.watchProgressDiscription}>
            <h1>Watch your progress every day</h1>
            <p>Save statistics on your achievements and mistakes</p>

            <div className={style.watchProgressDiscriptionBtn}>
              Statistics →
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PreviewInfo;
