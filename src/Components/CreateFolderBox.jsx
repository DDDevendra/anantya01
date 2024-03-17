import React from 'react'
import styles from "../Styles/componantStyles/CreatefolderBox.module.css"
export default function CreateFolderBox({goTo}) {

    const doit = ()=>{
        goTo();
    }
  return (
    <div className={styles.MainBody} onClick={doit}>
    </div>
  )

}
