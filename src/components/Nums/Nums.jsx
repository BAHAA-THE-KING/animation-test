function Nums() {
   return (
      <div className="w-100 d-flex flex-row justify-content-evenly" style={{ backgroundImage: "url(background/tap-promo.png)" }}>
         {
            [10, 20, 100, 600].map(
               e =>
                  <div
                     className="
                                position-relative
                                text-center
                                "
                     style={{
                        width: "15%",
                        aspectRatio: "1",
                        marginTop: "450px",
                        marginBottom: "300px",
                        fontSize: "65px",
                        border: "10px rgb(51 65 85) solid",
                        borderRadius: "50%",
                        lineHeight: "190px",
                        backgroundColor: "white"
                     }}
                  >
                     {e}
                  </div>
            )
         }
      </div>
   );
}

export default Nums;