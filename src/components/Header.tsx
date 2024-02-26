import { ShoppingCartIcon, UserRoundIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Cart } from "../components/Cart";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenModalClick() {
    document.body.classList.add("remove-scrollbar");
    setIsOpen(true);
  }

  function closeModal(value: boolean) {
    setIsOpen(value);
  }

  return (
    <header className="bg-gray-light-ultra">
      <div className="flex justify-between items-center py-5 px-24">
        <div className="font-bold flex gap-1 text-2xl">
          <Link to="/">
            <span className="text-purple">SHOES </span>
            <span>Store</span>
          </Link>
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
          <button
            className="border-gray-dark border border-solid rounded-md p-2"
            onClick={handleOpenModalClick}
          >
            <ShoppingCartIcon />
          </button>
        </div>
      </div>

      <Cart isOpen={isOpen} closeModal={closeModal} />
    </header>
  );
}
