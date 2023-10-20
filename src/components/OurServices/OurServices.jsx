import { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./OurSetvices.css";

function OurServices() {

   const ref = useRef(null);
   const view = useInView(ref, { once: true });
   const controler = useAnimation();

   const serviceVariant = {
      hidden: {
         x: 400,
         opacity: 0
      },
      visible: {
         x: 0,
         opacity: 1,
         transition: {
            duratino: 0.6,
            delay: 0.5
         }
      }

   }

   useEffect(() => {
      if (view) {
         controler.start("visible");
      }
   }, [view])


   return (
      <motion.div
         ref={ref}
         className="w-100 h-100 d-flex flex-wrap flex-row justify-content-evenly"
         variants={serviceVariant}
         initial="hidden"
         animate={controler}
      >
         {
            ["service", "service", "service", "service", "service", "service"].map(
               (e, i) =>
                  <div>
                     <div
                        key={e + (i + 1)}
                        className="
                              position-relative
                              text-center
                              nota
                              "
                        style={{
                           width: "250px",
                           height: "250px",
                           margin: "3rem 5rem",
                           border: "10px rgb(51 65 85) solid",
                           backgroundColor: "white",
                           borderRadius: "50%",
                           filter: "drop-shadow(-50px 0 6px #AAA)",
                           transition: "0.2s",
                           display: "flex",
                           flexDirection: "column",
                           justifyContent: "center",
                           alignItems: "center"
                        }}
                     >
                        <div
                           style={{
                              backgroundColor: "transparent",
                              backgroundImage: "url('assets/Landing (web) - 1-image5.png')",
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat",
                              width: "65%",
                              height: "65%",
                              transition: "0.2s"
                           }}
                        ></div>
                        <div
                           style={{
                              backgroundColor: "transparent",
                              backgroundImage: "url('assets/Landing (web) - 1-image5 - Copy.png')",
                              backgroundSize: "100% 100%",
                              backgroundRepeat: "no-repeat",
                              width: "65%",
                              height: "0",
                              transition: "0.2s"
                           }}
                        ></div>
                     </div>
                     <div
                        style={{
                           marginTop: "-30px",
                           fontSize: "30px"
                        }}
                     >
                        {e +" " +(i + 1)}
                     </div>
                  </div>
            )
         }
      </motion.div>
   );
}

export default OurServices;