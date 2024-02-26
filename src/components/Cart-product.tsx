import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";

import tenis from "../assets/1_nike.png";

export function CartProduct() {
  return (
    <div className="flex justify-between items-center border-b border-solid border-gray-light pb-4">
      <div className="flex gap-4">
        <div className="bg-gray-light-ultra w-[91px] h-[91px] p-2 rounded-md flex items-center justify-center">
          <img src={tenis} alt="" />
        </div>
        <div>
          <h2 className="text-sm">Logitech MX Master 3s</h2>
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">R$ 467,93</span>
            <span className="text-gray line-through text-sm">R$ 719,90</span>
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
  );
}
