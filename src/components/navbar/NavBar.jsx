import React from "react"

export default function NavBar() {

  return(
    <>
    <div className="container" style={{zIndex: "10"}}>
      <div className="navbar d-flex justify-content-between align-items-center" style={{zIndex: "10", position: "fixed", width: "83%"}}>
        <div className="d-flex justify-content-center align-items-center" style={{width:"140px", height:"100px"}}><img className="img-fluid" src={process.env.PUBLIC_URL + '/assets/Landing (web) - 1-image2.png'} /></div>
        <button className="rounded-pill bg-light pt-1 pb-1 ps-4 pe-4 fw-bold fs-7" style={{border:"none", outline:"none",cursor:"pointer"}}>Sign up</button>
      </div>
    </div>
    </>
  )

}