import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";

import tenis from "../assets/1_nike.png";
import { useRef } from "react";

interface CartProps {
  isOpen: boolean;
  closeModal: (value: boolean) => void;
}

export function Cart({ isOpen, closeModal }: CartProps) {
  const modal = useRef(null);

  const classIfIsOpen =
    isOpen === true
      ? "flex bg-[#0b0b0b85] absolute h-screen top-0 left-0 right-0 bottom-0 overflow-hidden"
      : "hidden";

  function handleCloseModalClick() {
    document.body.classList.remove("remove-scrollbar");
    closeModal(false);
  }

  function handleOutModalClick() {
    document.body.classList.remove("remove-scrollbar");
    closeModal(false);
  }

  return (
    <div className={classIfIsOpen}>
      <div className="flex-1" onClick={handleOutModalClick}></div>
      <div
        className="w-[540px] ml-auto bg-white p-10 flex flex-col justify-between ease-in-out"
        ref={modal}
      >
        <div>
          <header className="flex items-center justify-between mb-10">
            <div className="flex gap-2 border-2 border-solid border-purple rounded-full py-2 px-4">
              <ShoppingCartIcon />
              <span className="font-bold text-lg uppercase">Carrinho</span>
            </div>

            <button
              className="border-gray-dark p-2"
              onClick={handleCloseModalClick}
            >
              <XIcon />
            </button>
          </header>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-solid border-gray-light pb-4">
              <div className="flex gap-4">
                <div className="bg-gray-light-ultra w-[91px] h-[91px] p-2 rounded-md flex items-center justify-center">
                  <img src={tenis} alt="" />
                </div>
                <div>
                  <h2 className="text-sm">Logitech MX Master 3s</h2>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">R$ 467,93</span>
                    <span className="text-gray line-through text-sm">
                      R$ 719,90
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-2">
                    <button className="border border-solid border-gray-dark rounded-md p-1">
                      <ChevronLeftIcon />
                    </button>
                    <span className="text-xl">1</span>

                    <button className="border border-solid border-gray-dark rounded-md  p-1">
                      <ChevronRightIcon />
                    </button>
                  </div>
                </div>
              </div>

              <button className="border-gray-dark border border-solid rounded-md p-2">
                <Trash2Icon />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm py-4">
            <span>Entrega</span>
            <span>GRÁTIS</span>
          </div>

          <div className="flex justify-between  border-t border-solid border-gray-light font-bold pt-4">
            <span>Total</span>
            <span>R$ 1.226,93</span>
          </div>

          <button className="bg-purple w-full text-white font-bold py-2 rounded-md mt-8">
            Finalizar compra
          </button>
        </div>
      </div>
    </div>
  );
}
