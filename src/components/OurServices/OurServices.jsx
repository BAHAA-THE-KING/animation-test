import "./OurSetvices.css";

function OurServices() {
   return (
      <div className="w-100 h-100 d-flex flex-wrap flex-row justify-content-evenly">
         {
            ["", "", "", "", "", ""].map(
               (e, i) =>
                  <div
                     key={i}
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
                        borderRadius: "50%",
                        backgroundColor: "white",
                        backgroundImage: "url('assets/Landing (web) - 1-image5.png')",
                        backgroundSize: "65% 65%",
                        backgroundPosition: "37px 37px",
                        backgroundRepeat: "no-repeat",
                        filter: "drop-shadow(-50px 0 6px #AAA)",
                        transition: "0.2s"
                     }}
                  >
                     {e}
                  </div>
            )
         }
      </div>
   );
}

export default OurServices;