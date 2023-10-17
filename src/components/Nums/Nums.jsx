function Nums() {
   return (
      <div className="w-100 d-flex flex-row justify-content-evenly" style={{ backgroundImage: "url(background/tap-promo.png)" }}>
         {
            [10, 20, 100, 600].map(
               e =>
                  <div
                     key={e}
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
                     {e}
                  </div>
            )
         }
      </div>
   );
}

export default Nums;