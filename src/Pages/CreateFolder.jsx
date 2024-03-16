import React from "react";
import style from "../Styles/CreatefolderPage.module.css";

export default function CreateFolder() {
  return (
    <>
      <div className={style.Main_Bg}></div>

      <div className={style.Main_Crt_Fld}>
        <div className={style.Main_Last}>
          <div className={style.FileName}>a</div>
          <div className={style.Image}>b</div>
          <div className={style.Footer}>f</div>
        </div>
      </div>
    </>
  );
}
