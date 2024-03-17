import React, { useState } from "react";
import style from "../Styles/ProfilePage.module.css";
import CreateFolderBox from "../Components/CreateFolderBox";
import FolderBox from "../Components/FolderBox";
import CreateFolder from "./CreateFolder";

export default function ProfilePage() {

    const [isCreateFolder,setisCreateFolder] = useState(false);

    const ChangeCreateFolder = ()=>{
        setisCreateFolder(!isCreateFolder);
    }

  return (
    <>
    { isCreateFolder &&  <CreateFolder goBack={ChangeCreateFolder}/>}
      <div className={style.Main}>
        <div className={style.MainHead}>
          <dev className={style.Menu1}></dev>
          <dev className={style.Menu2}></dev>
          <div className={style.MainProfile}>
            <div className={style.ProPic}><input type="file" /></div>
            <div className={style.ProInfo}>
                <p>Name : Devendra Dangare</p>
                <p>Age : 21</p>
                <p>Gender : Male</p>
                <p>Mail : xyzfsv_Eg40@gmail.com</p>
            </div>
          </div>
          <dev className={style.Menu3}></dev>
          <dev className={style.Menu4}></dev>
        </div>

        <div className={style.BodyMain}>
            <div className={style.BodyBox}>
                <CreateFolderBox goTo={ChangeCreateFolder}/>
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
