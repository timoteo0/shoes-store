interface Product {
  img: string;
  title: string;
  prevPrice: number;
  newPrice: number;
  company: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="mb-10">
      <div className="bg-gray-light-ultra p-7 rounded-lg w-[360px] h-[380px] flex items-center">
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
    </div>
  );
}
