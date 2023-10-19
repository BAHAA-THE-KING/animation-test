import React, { useState } from "react"
import "./NavBar.css"
import Reveal from "../animation/Reveal";
export default function NavBar() {

  const [navbar, setNavBar] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY >= 100) {
      console.log(window.scrollY);
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };

  window.addEventListener('scroll', changeBackgroundColor);

  return (
    <>
        <div className={navbar ? "container-fluid actv" : ""} style={{ zIndex: "100", position: "fixed", width: "100%", transition: ".4s" }}>
          <div className="navbar d-flex justify-content-between align-items-center" >
            <div className="logo d-flex justify-content-center align-items-center" style={{ width: "140px", height: "100px" }}><img className="img-fluid" src={'assets/logo small.png'} alt="" /></div>
            <button className=" sign rounded-pill bg-light pt-1 pb-1 ps-4 pe-4 fw-bold fs-7" style={{ border: "none", outline: "none", cursor: "pointer" }}>Sign up</button>
          </div>
        </div>
    </>
  )

}