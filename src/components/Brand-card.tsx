interface BrandCardProps {
  brand: string;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <>
      <button className="w-[198px] h-[50px] border-gray-dark border border-solid rounded-md font-bold">
        <span>{brand}</span>
      </button>
    </>
  );
}
