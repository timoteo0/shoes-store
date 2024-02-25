import { useParams } from "react-router-dom";

import products from "../products";
import { ProductCard } from "../components/Product-card";

export function BrandProduct() {
  const { brand } = useParams();
  const filteredProduct = products.filter(
    (product) => product.company === brand
  );

  console.log(filteredProduct, brand);

  return (
    <div className="max-w-[1256px] m-auto mt-10 mb-20">
      <div className="inline-block border-2 border-solid border-purple rounded-full py-2 px-4 mb-10">
        <span className="font-bold text-lg uppercase">{brand}</span>
      </div>

      <div className="m-auto mb-10">
        <div className="flex flex-wrap gap-20">
          {filteredProduct.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
