import React from "react";
import style from "../Styles/ProfilePage.module.css";
import CreateFolderBox from "../Components/CreateFolderBox";
import FolderBox from "../Components/FolderBox";

export default function ProfilePage() {
  return (
    <>
      <div className="main">
        <div className={style.MainHead}>
          <dev className={style.Menu1}></dev>
          <dev className={style.Menu2}></dev>
          <div className={style.MainProfile}>
            <div className={style.ProPic}></div>
            <div className={style.ProInfo}>
                <p>Name : Devendra Dangare</p>
                <p>Age : 21</p>
            </div>
          </div>
          <dev className={style.Menu3}></dev>
          <dev className={style.Menu4}></dev>
        </div>

        <div className={style.BodyMain}>
            <div className={style.BodyBox}>
                <CreateFolderBox/>
                <FolderBox/>
                <FolderBox/>
                <FolderBox/>
                <FolderBox/>

                <FolderBox/>
                <FolderBox/>
                <FolderBox/>
                <FolderBox/>
                
            </div>
        </div>
      </div>
    </>
  );
}
