import { Link } from "react-router-dom";

interface Product {
  id?: number;
  img: string;
  title: string;
  prevPrice: number;
  newPrice: number;
  company: string;
}

interface ProductCardProps {
  product: Product;
  size: "sm" | "lg";
}

export function ProductCard({ product, size }: ProductCardProps) {
  return (
    <div>
      <Link to={`/product/page/${product.id}`}>
        <div
          className={`bg-gray-light-ultra p-7 rounded-lg ${
            size === "lg" ? "w-[360px] h-[380px]" : "w-[260px] h-[280px]"
          } flex items-center`}
        >
          <img src={product.img} alt="" className="w-full" />
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <span className="text-sm text-nowrap overflow-hidden text-ellipsis">
            {product.title}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl">R$ 100,00</span>
            <span className="text-sm text-gray line-through">R$ 100,00</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
