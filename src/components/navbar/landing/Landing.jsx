import { useCallback, useState, useEffect } from "react";
import "./Landing.css"
export default function Landing() {


  const [y, setY] = useState(window.scrollY);
  const [txt, setTxt] = useState(0);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY && window.scrollY < 414) {
        setTxt((val) => val - 0.1);
        console.log("scrolling up");
      } else if (y < window.scrollY && y >= 180 && y <= 288) {
        setTxt((val) => val + 0.1);
        console.log("scrolling down");
      }
      setY(window.scrollY);
    }, [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  // const changeBackgroundColor = () => {
  //   if (window.scrollY >= 100 && window.scrollY <= 288) {
  //     setTxt((val) => val + 0.01);
  //     console.log("val is : " + txt);
  //   } else if (window.scrollY > 491 && window.scrollY >= 301) {
  //     setTxt((val) => val - 0.01);
  //   }
  // };

  window.addEventListener('scroll', handleNavigation);


  return (
    <>
      <div className="d-flex justify-content-center align-center pt-5" style={{ width: "100%", opacity: ".1" }}>
        <img className="img-fluid" src="/assets/Landing (web) - 1-image2.png" alt="" />
      </div>
      <div className="buttons" style={{ position: "relative", top: "-30%" }}>
        <button className="rounded-pill">MUSICBOX PREMIUM</button>
        <button className="rounded-pill">MUSICBOX FREE</button>
      </div>
      <div style={{ position: "relative", top: "-26%", color: "white", fontSize: "5rem", height: "fit-content", filter: `blur(${txt}px)` }}>STUDIONA</div>
    </>
  )


}
