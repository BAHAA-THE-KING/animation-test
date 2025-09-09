import Counter from "./Counter";

function Nums() {
  return (
    <div
      className="w-100 d-flex flex-row justify-content-evenly"
      style={{ backgroundImage: "url(background/tap-promo.png)" }}
    >
      {[546, 135, 756, 987].map((e) => (
        <Counter key={e} value={e} />
      ))}
    </div>
  );
}

export default Nums;
