import "./Songs.css"
import Reveal from "../animation/Reveal"

export default function Songs() {

  const time  = 0.5

  return (
    <>
      <Reveal durationTime={time}>
        <div className="container-fluid">
          <div className="row songs">
            <div className="col-4 mb-4">
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </div>
            <div className="col-4">
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </div>
            <div className="col-4">
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </div>
            <div className="col-4">
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </div>
            <div className="col-4">
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </div>
            <div className="col-4">
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </div>
          </div>
          <button className="buton">
            View More
          </button>
        </div>
      </Reveal>
    </>
  )

}