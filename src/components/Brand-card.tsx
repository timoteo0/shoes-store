import { Link } from "react-router-dom";

interface BrandCardProps {
  brand: string;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <>
      <Link to={`/product/${brand}`}>
        <button className="w-[198px] h-[50px] border-gray-dark border border-solid rounded-md font-bold">
          <span>{brand}</span>
        </button>
      </Link>
    </>
  );
}
