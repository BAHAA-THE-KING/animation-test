import { useEffect, useRef, useState } from "react";

function Counter({ value }) {
   let begin = useRef(false);
   let inter = useRef(null);
   const [cValue, setCValue] = useState(0);

   useEffect(
      () => {
         function runAnim() {
            if (!begin.current && window.scrollY >= 1800) {
               begin.current = true;
               inter.current = setInterval(
                  () => {
                     setCValue(
                        val => {
                           if (val >= value) clearInterval(inter.current);
                           return Math.min(
                              (val >= value - 20) ?
                                 (val + 0.3) :
                                 (val + (value - 20) / (1000 / 30)),
                              value
                           )
                        });
                  }, 30);
            }
         }
         document.addEventListener("scroll", runAnim);
         return () => document.removeEventListener("scroll", runAnim);
      },
      [value]
   );

   return (
      <div
         className="
                    position-relative
                    text-center
                    "
         style={{
            width: "20%",
            aspectRatio: "1",
            marginTop: "450px",
            marginBottom: "400px",
            fontSize: "65px",
            border: "10px rgb(51 65 85) solid",
            borderRadius: "50%",
            lineHeight: "260px",
            backgroundColor: "white",
            fontWeight: "bold"
         }}
      >
         {Math.round(cValue)}
      </div>
   );
}

export default Counter;