import { Header } from "./components/Header";
import "./index.css";

import offers from "./assets/ofertas.png";
import { BrandCard } from "./components/Brand-card";

import products from "./products";

function App() {
  const brandsName = Array.from(new Set(products.map((prod) => prod.company)));

  return (
    <>
      <Header />
      <img className="w-full" src={offers} />

      <div className="px-24 py-10 flex justify-center gap-10">
        {brandsName.map((brand) => (
          <BrandCard brand={brand} key={brand} />
        ))}
      </div>
    </>
  );
}

export default App;
