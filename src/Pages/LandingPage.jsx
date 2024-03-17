import React from 'react';
import '../Styles/landing.css'; // Import CSS file for styling
import { useNavigate } from "react-router-dom"; 

function LandingPage() {

    const nav = useNavigate();
  return (
    <div className="landing-page">
      <div className="left-half">
        <p>Hospital records management involves the organized storage, retrieval, and maintenance of medical data within healthcare facilities. It ensures accurate patient information, supports clinical decision-making, and ensures compliance with regulations. Efficient management improves patient care, streamlines operations, and upholds privacy standards.</p>
         <div className="button-container">
          <button onClick={()=>{ setTimeout(()=>{nav('/login')},1000)}}>Get Started</button>
        </div>
      </div>
      <div className="right-half"></div>
    </div>
  );
}

export default LandingPage;
