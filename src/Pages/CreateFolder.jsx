import React, { useState } from "react";
import style from "../Styles/CreatefolderPage.module.css";

export default function CreateFolder({ goBack }) {
  const [folderName, setfolderName] = useState();
  const [userEmail,setuerEmail] = useState()
  const [fileBase64, setFileBase64] = useState("");

  const [backData,setbackData] = useState('');


  const GoBack = () => {
    goBack();
  };


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result.split(",")[1]; // Extracting base64 string from result
      setFileBase64(base64String);
    };
    reader.readAsDataURL(file);
  };



  function uploadImage() {
    const form = fileBase64;
    const formData = new FormData(form);
    
    const userEmail = backData.userEmail; // You can replace this with the user's email
    const folderId = backData.id; // You can replace this with the folder ID
    
    fetch(`https://hospital-management-backend-n7ck.onrender.com/${userEmail}/${folderId}/create-image`, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      return response.json();
    })
    .then(data => {
      console.log('Image uploaded successfully:', data);
    })
    .catch(error => {
      console.error('Error uploading image:', error);
    });
  }




  const CreateFolder = async () => {
    try {
      console.log(folderName);
      console.log(fileBase64);
      const token =
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxQGdtYWlsLmNvbSIsImlhdCI6MTcxMDY0OTQ5NywiZXhwIjoxNzEwNjY3NDk3fQ.0MUVt4yZDM6ZyKPj-laJh-ASe3jiUZII7QUswgUEqapa59mOImiGVxUll5tNsyGrfbOqjiAxxr0Wv0lS_ZqJuw";
      const response = await fetch(
        `https://hospital-management-backend-n7ck.onrender.com/folder/${userEmail}/create/${folderName}`,
        {
          method: "POST", // Use POST method
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json", // Specify JSON content type
          },
          // Send an empty JSON object as the body since folderName is already in the path
          body: JSON.stringify({}),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      console.log(jsonData);

      setbackData(jsonData);
      // uploadImage();
      console.log(backData);

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
              onChange={(e)=>{
                setfolderName(e.target.value)
              }}
            />
          </div>

          <div className={style.Image}>
            <input type="file" onChange={(e)=>{
              handleFileChange(e)
            }}/>
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
