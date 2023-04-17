import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import Footer from "../Footer";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

import kidsswimming from "../Instructors/Images/kidswimming.jpeg";
import events from "../Instructors/Images/events.jpeg";
import purchasepackage from "../Instructors/Images/purchasepackage.webp";
import UserContext from "../../context";

const StudentLanding = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [kidsswimming, events, purchasepackage];
  const headings = ["Book A Class", "Events", "Purchase A Package"];
  const links=['/book-a-class', '/events', '/package-form']
  const navigate = useNavigate();
  
  const NextArrow = ({ onClick }) => {
    return (
      <>
        <IconContext.Provider value={{ color: "black" }}>
          <div
            className="arrow next"
            onClick={onClick}
            style={{ top: "140%", right: "30%", position: "absolute" }}
          >
            <FaArrowRight />
          </div>
        </IconContext.Provider>
      </>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <IconContext.Provider value={{ color: "black" }}>
        <div
          className="arrow prev"
          style={{ top: "140%", left: "25%", position: "absolute" }}
          onClick={onClick}
        >
          <FaArrowLeft />
        </div>
      </IconContext.Provider>
    );
  };

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <>
    <div className='main'>
    <Navbar />
        <img 
        src= '/swimschoollogo.png'
        alt='swimschoologo'
        style={{
        transform: "translate(40%,-25%)",
        }}/>

      <section style={{ marginBottom: "30vh", transform:'translateY(-40%)'}}>
        <div>
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div
                className={idx === imageIndex ? "slide activeSlide" : "slide"}
              >
                <div width="33vw">
                  <p
                    style={{
                      fontFamily: "verdana, sans-serif",
                      fontSize: "20px",
                      color:"white",
                      padding: "20px",
                      marginBottom: "100px",
                      transform: "translateX(-50%)",
                      textAlign: "center",
                    }}
                  >
                    {headings[idx]}
                  </p>
                </div>
                <div>
                  <img
                    src={img}
                    alt={img}
                    width={500}
                    height={300}
                    style={{
                      position: "absolute",
                      top: "50%",
                      transform: "translateX(-50%)",
                      borderRadius: "10%",
                      boxShadow: '0px 8px 28px #AAABB8'
                    }}
                    onClick={()=>navigate(links[idx])}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <Footer />
      
      </div>
    </>
  );
};
export default StudentLanding;