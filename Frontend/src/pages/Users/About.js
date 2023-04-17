import { textAlign } from "@mui/system";
import React from "react";
const About = () => {
  return (
    <>
    {/* ========================================================================== ABOUT INSTRUCTORS ============================================================================== */}
     <div className="row justify-content-center text-center align-items-center m-5">
      <h1 style={{ color: "white", textAlign: "center" }}>About Us</h1>
      <div className="col-4 d-flex flex-column h-25"></div>
      <div className="logo col-4 d-flex flex-column h-25 w-25">
      <img
            src="/logo_with_white_background.png"
            alt="title"
            className="bg-dark m-2"
            width="400"
          />
         <p className='fade-in m-4' style={{ color: "#FFFFFF" }}>Dolphin Swim School was established since 2000 and has nurtured multiple national athletes that represent in events such as SNAG, national championships. We believe that every student in Dolphin Swim School should have equal opportnity regardless of age, experience and background.   </p>

        </div>
        <div className=" col-4 d-flex flex-column h-25"></div>
      </div>
      <div className="row justify-content-center text-center align-items-center mb-5">
      <h2 style={{ color: "white", textAlign: "center" }}>Our Instructors</h2>
        <div className="instructors col-4 d-flex flex-column h-25">
          <img
            src="https://bit.ly/3E4NpWn"
            alt="title"
            className="instructors-img bg-dark m-2"
            width="400"
          />
          <h2 style={{ color: "#FFFFFF" }}>John</h2>
          <p className='fade-in' style={{ color: "#FFFFFF" }}>Barry has been with us for more than 15 years. He was our fastest swimmer before joining as full-fledged coach. He aspires to inspire our club members to be a strong swimmer, both physically and mentally.  </p>
        </div>
        <div className="instructors col-4 d-flex flex-column h-25">
          <img
            src="https://bit.ly/3YkxbzK"
            alt="title"
            className="instructors-img bg-dark m-2"
            width="400"
          />
          <h2 style={{ color: "#FFFFFF" }}>William</h2>
          <p className='fade-in' style={{ color: "#FFFFFF" }}>William is our youngest coach. He has been coaching in public pools since his schooling years with close to 10 years of experience working with kids. He believes that swimming a an essential skill that all kids should learn, for safety and general health   </p>

        </div>
        <div className="instructors col-4 d-flex flex-column h-25 ">
          <img
            src="https://bit.ly/3l9KoNL"
            alt="title"
            className="instructors-img bg-dark m-2"
            width="400"
          />
          <h2 style={{ color: "#FFFFFF" }}>Barry</h2>
          <p className='fade-in' style={{ color: "#FFFFFF" }}>Barry has been with us for more than 15 years. He was our fastest swimmer before joining as full-fledged coach. He aspires to inspire our club members to be a strong swimmer, both physically and mentally.  </p>
        </div>
      </div>
    </>
  );
};

export default About;
