import adidasLogo from "../assets/adidas_logo.png";
import nikeLogo from "../assets/nike_logo.png";
import pumaLogo from "../assets/puma_logo.png";
import olympikusLogo from "../assets/olympikus_logo.png";
import { Link } from "react-router-dom";

export function Brands() {
  return (
    <div className="max-w-[1256px] m-auto mt-10 mb-20">
      <div className="inline-block border-2 border-solid border-purple rounded-full py-2 px-4 mb-10">
        <span className="font-bold text-lg uppercase">Marcas</span>
      </div>

      <div className="grid grid-flow-row grid-cols-3 gap-10">
        <div className="w-[385px] h-[255] flex flex-col">
          <Link to="/product/Adidas">
            <div className="h-[185px] bg-gray-light-ultra flex items-center justify-center rounded-t-md">
              <img className="w-49" src={adidasLogo} alt="adidas logo" />
            </div>
            <div className="text-center bg-gray-dark text-white py-5 rounded-b-md">
              <span className="font-bold text-lg">Adidas</span>
            </div>
          </Link>
        </div>

        <div className="w-[385px] h-[255] flex flex-col">
          <Link to="/product/Nike">
            <div className="h-[185px] bg-gray-light-ultra flex items-center justify-center rounded-t-md">
              <img className="w-48" src={nikeLogo} alt="nike logo" />
            </div>
            <div className="text-center bg-gray-dark text-white py-5 rounded-b-md">
              <span className="font-bold text-lg">Nike</span>
            </div>
          </Link>
        </div>

        <div className="w-[385px] h-[255] flex flex-col">
          <Link to="/product/Puma">
            <div className="h-[185px] bg-gray-light-ultra flex items-center justify-center rounded-t-md">
              <img src={pumaLogo} alt="puma logo" className="w-48" />
            </div>
            <div className="text-center bg-gray-dark text-white py-5 rounded-b-md">
              <span className="font-bold text-lg">Puma</span>
            </div>
          </Link>
        </div>

        <div className="w-[385px] h-[255] flex flex-col">
          <Link to="/product/Olympikus">
            <div className="h-[185px] bg-gray-light-ultra flex items-center justify-center rounded-t-md">
              <img src={olympikusLogo} alt="olympikus logo" className="w-48" />
            </div>
            <div className="text-center bg-gray-dark text-white py-5 rounded-b-md">
              <span className="font-bold text-lg">Olympikus</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
