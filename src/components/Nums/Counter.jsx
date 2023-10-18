import { useEffect, useState } from "react";

function Counter({ value }) {
   let begin = false;
   let inter = { inter: null };
   const [cValue, setCValue] = useState(0);

   useEffect(
      () => {
         function runAnim() {
            if (!begin && document.scrollingElement.scrollTop >= 2300) {
               begin = true;
               inter.inter = setInterval(
                  () => {
                     setCValue(
                        val => {
                           if (val >= value) clearInterval(inter.inter);
                           return Math.min(
                              (val >= value - 20) ?
                                 (val + 0.3) :
                                 (val + (value - 20) / 100),
                              value
                           )
                        });
                  }, 10);
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