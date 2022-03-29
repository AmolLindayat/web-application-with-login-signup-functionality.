import React from "react";
import "./homepage.css";
const Homepage = ({setLoginUser}) => {
  return (
    <div className="homepage">
      <h1>homepage work</h1>
      <div className="button" onClick={()=>setLoginUser({})}>Logout</div>
    </div>
  );
};

export default Homepage;

