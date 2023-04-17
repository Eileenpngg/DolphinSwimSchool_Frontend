import React, { useContext, useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context";
import { CgProfile } from "react-icons/cg";
import { IconContext } from "react-icons";
import { responsiveFontSizes } from "@mui/material";


const Profile = ({remainingPackage}) => {
  console.log(remainingPackage)
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  console.log(userCtx.userDetails.is_instructor)
  return (
    <>
      <div style={{ transform: "translate(46%, 50%)" }}>
        <IconContext.Provider value={{ color: "white", size: "8em" }}>
          <CgProfile />
        </IconContext.Provider>
      </div>
      {userCtx.userDetails.is_instructor?"":<section style={{transform:'translate(38%, 50%)'}}>
      <h2 style={{color: 'white' ,transform:'translateX(3.5%)'}}>Number of sessions left</h2>
      <div className="progress" style={{'width': '25vw', 'height': '40px'}}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{'width': `${remainingPackage.remainingPackage/50*100}%`, backgroundColor:'#2E9CCA'}}
          aria-valuemin="0"
          aria-valuemax="50"
        ></div>
      </div>
      <button className="btn btn-secondary w-20 m-4" type="submit" onClick={() => navigate("/")}>
            Back to home
        </button>
      <button className="btn btn-secondary w-20 m-4" type="submit" onClick={() => navigate("/package-form")}>
            Purchase Packages
        </button>
        </section>}
      
      <table
        className="table table-bordered w-25"
        style={{ transform: "translate(152%, 45%)" }}
      >
        <tbody>
          <tr style={{ color: "white" }}>
            <th scope="row">Name</th>
            <td>{userCtx.userDetails.name}</td>
          </tr>
          <tr style={{ color: "white" }}>
            <th scope="row">Email</th>
            <td>{userCtx.userDetails.email}</td>
          </tr>
          <tr style={{ color: "white" }}>
            <th scope="row">Contact</th>
            <td>{userCtx.userDetails.contact}</td>
          </tr>
          <tr style={{ color: "white" }}>
            <th scope="row">Age</th>
            <td>{userCtx.userDetails.age}</td>
          </tr>
          <tr style={{ color: "white" }}>
            <th scope="row">Level</th>
            <td>{userCtx.userDetails.level}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Profile;
