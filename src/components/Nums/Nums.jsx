import Counter from "./Counter";

function Nums() {
   return (
      <div className="w-100 d-flex flex-row justify-content-evenly" style={{ backgroundImage: "url(background/tap-promo.png)" }}>
         {
            [10, 20, 100, 600].map(
               e => <Counter key={e} value={e} />
            )
         }
      </div>
   );
}

export default Nums;