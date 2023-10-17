import "./Landing.css"
export default function Landing() {

  return (
    <>
      <div className="d-flex justify-content-center align-center pt-5" style={{ width: "100%", opacity: ".1" }}>
        <img className="img-fluid" src="/assets/Landing (web) - 1-image2.png" />
      </div>
      <div className="buttons" style={{ position: "relative", top:"-27%"}}>
        <button className="rounded-pill">MUSICBOX PREMIUM</button>
        <button className="rounded-pill">MUSICBOX FREE</button>
      </div>
    </>
  )


}
