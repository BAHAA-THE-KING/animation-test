import { useRef, useEffect } from "react";
import "./Songs.css"
import { motion, useInView, useAnimation } from "framer-motion"
import Reveal from "../animation/Reveal";
export default function Songs() {

  const time = 0.5

  const ref = useRef(null);
  const view = useInView(ref, { second: true });
  const controler = useAnimation();

  useEffect(() => {
    if (view) {
      controler.start("visible");
    }
  }, [view])

  const childVariant1 = {
    hidden: {
      x: -400,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    }
  }

  const childVariant2 = {
    hidden: {
      x: -400,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1,
      }
    }
  }

  const buttonVariant = { 
    hidden: {
      x: -400,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.6,
      }
    }
  }

  return (
    <div className="container-fluid">
      <div ref={ref} className="row songs">
        {
          [1, 2, 3].map((ele) => (
            <motion.div className="col-4 mb-4"
              variants={childVariant1}
              initial="hidden"
              animate={controler}
            >
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </motion.div>
          ))
        }
        {
          [1, 2, 3].map((ele) => (
            <motion.div ref={ref} className="col-4 mb-4"
              variants={childVariant2}
              initial="hidden"
              animate={controler}
            >
              <img src="assets/video.jpg" className="img-fluid" alt="" />
              <div></div>
            </motion.div>
          ))
        }
      </div>
      <div style={{cursor:"pointer"}}>
      <motion.button className="buton m-auto"
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
        >
          View More
        </motion.button>
      </div>
        
    </div >
  )

}