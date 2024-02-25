import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-gray-light-ultra">
      <div className="max-w-[1920px] m-auto  flex justify-between items-center py-5 px-24">
        <div className="font-bold flex gap-1 text-2xl">
          <span className="text-purple">SHOES</span>
          <span>Store</span>
        </div>

        <nav className="flex gap-8 font-bold">
          <Link to="/">Início</Link>
          <span className="border border-gray-dark rounded"></span>
          <Link to="/brands">Marcas</Link>
        </nav>

        <div className="flex gap-8">
          <button className="border-gray-dark border border-solid rounded-md p-2">
            <UserRoundIcon />
          </button>
          <button className="border-gray-dark border border-solid rounded-md p-2">
            <ShoppingCartIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
