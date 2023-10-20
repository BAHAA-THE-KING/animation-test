import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"


export default function Reveal({ children, durationTime, xis, yis }) {

  const ref = useRef(null);
  const view = useInView(ref, {once: true});
  const controler = useAnimation();

  useEffect(()=>{
    if(view) {
      controler.start("visible");
    }
  },[view])

  return (
    <>
      <div className="text-start" ref={ref}>  
        <motion.div
          variants={{
            hidden: { opacity:0, x: xis, y: yis },
            visible:{ opacity:1, x: 0, y: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{duration: durationTime, delay:0.25}}
        >
          {children}
        </motion.div>
      </div>
    </>
  )

}