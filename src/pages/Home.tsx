import { BrandCard } from "../components/Brand-card";
import { ProductCard } from "../components/Product-card";

import products from "../products";
import offers from "../assets/ofertas.png";

export function Home() {
  const brandsName = Array.from(new Set(products.map((prod) => prod.company)));

  return (
    <>
      <img className="w-full" src={offers} />

      <div className="px-24 py-10 flex justify-center gap-10">
        {brandsName.map((brand) => (
          <BrandCard brand={brand} key={brand} />
        ))}
      </div>

      <div className="py-10 px-24">
        <h2 className="text-lg font-bold uppercase mb-10">Ofertas</h2>

        <div className="flex flex-wrap justify-between gap-10">
          {products.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
