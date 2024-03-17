import React, { useState } from "react";
import style from "../Styles/CreatefolderPage.module.css";

export default function CreateFolder({ goBack }) {
  const [folderName, setfolderName] = useState();

  const GoBack = () => {
    goBack();
  };

  const CreateFolder = async () => {
    try {
        console.log(folderName);
        const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMDY0OTQ5NywiZXhwIjoxNzEwNjY3NDk3fQ.0MUVt4yZDM6ZyKPj-laJh-ASe3jiUZII7QUswgUEqapa59mOImiGVxUll5tNsyGrfbOqjiAxxr0Wv0lS_ZqJuw";
        const response = await fetch(
            `https://hospital-management-backend-n7ck.onrender.com/create/${folderName}`,
            {
                method: "POST", // Use POST method
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json" // Specify JSON content type
                },
                // Send an empty JSON object as the body since folderName is already in the path
                body: JSON.stringify({})
            }
        );
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

  return (
    <>
      <div className={style.Main_Bg}></div>
      <div className={style.Main_Crt_Fld}>
        <div className={style.Main_Last}>
          <div className={style.FileName}>
            <input
              type="text"
              placeholder="Enter File Name"
              onChange={(e) => {
                setfolderName(e.target.value);
              }}
            />
          </div>

          <div className={style.Image}>
            <input type="file" />
          </div>
          <div className={style.Footer}>
            <div className={style.CancleBt} onClick={GoBack}></div>
            <div className={style.OkBt} onClick={CreateFolder}></div>
          </div>
        </div>
      </div>
    </>
  );
}
