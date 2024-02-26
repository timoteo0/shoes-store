import { Trash2Icon } from "lucide-react";
import { Counter } from "./Counter";

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

          <Counter />
        </div>
      </div>

      <button className="border-gray-dark border border-solid rounded-md p-2">
        <Trash2Icon />
      </button>
    </div>
  );
}
