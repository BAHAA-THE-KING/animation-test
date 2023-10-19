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
                                "
                     style={{
                        width: "15%",
                        aspectRatio: "1",
                        margin: "3rem 5rem",
                        fontSize: "65px",
                        border: "10px rgb(51 65 85) solid",
                        borderRadius: "50%",
                        lineHeight: "190px",
                        backgroundColor: "white",
                        backgroundImage: "url('assets/Landing (web) - 1-image5.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "32px",
                        filter: "drop-shadow(-50px 0 6px #AAA)"
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