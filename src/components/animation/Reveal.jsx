import React, { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"


export default function Reveal({ children, durationTime }) {

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
      <div ref={ref} style={{position:"relative"}}>  
        <motion.div
          variants={{
            hidden: { opacity:0, x: -400 },
            visible:{ opacity:1, x: 0 }
          }}
          initial="hidden"
          animate={controler}
          transition={{duration: durationTime, delay:0.25}}
        >
          {children}
        </motion.div>
      </div>
    </>
  )

}