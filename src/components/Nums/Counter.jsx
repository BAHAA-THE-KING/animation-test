import { useEffect, useState } from "react";

function Counter({ value }) {
   useEffect(
      () => {
         const inter = setInterval(() => setCValue(val => Math.min((val >= value - 20) ? (val + 0.3) : (val + (value - 20) / 100), value)), 10);
         return () => clearInterval(inter);
      },
      [value]
   );
   const [cValue, setCValue] = useState(0);

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
            backgroundColor: "white"
         }}
      >
         {Math.round(cValue)}
      </div>
   );
}

export default Counter;