import { useParams } from "react-router-dom";
import { Truck } from "lucide-react";

import products from "../products";
import { ProductCard } from "../components/Product-card";
import { CurrencyFormat } from "../Utils/currency-format";
import { Counter } from "../components/Counter";

export function Product() {
  const { id } = useParams();
  const idInNumber = Number(id);

  const product = products.find((product) => product.id === idInNumber);
  const sameProductBrand = products.filter(
    (prod) => product && prod.company === product.company
  );

  if (!product) {
    return (
      <div>
        <h2>Produto não existe</h2>
      </div>
    );
  }

  return (
    <div className="max-w-[1256px] m-auto p-10">
      <div className="flex gap-8">
        <div className="w-[736px] h-[670px] bg-gray-light-ultra flex items-center justify-center rounded-md">
          <img src={product.img} alt="" />
        </div>

        <div className="w-[472px] h-[670px] flex flex-col justify-between bg-gray-light-ultra p-10 rounded-md">
          <div>
            <span className="text-sm text-gray">Novo | 100 vendidos</span>
            <h1 className="text-2xl">{product.title}</h1>
            <span className="text-sm text-purple">Disponível em estoque </span>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-3xl font-bold">
                {CurrencyFormat(product.newPrice)}
              </h2>
              <span className="text-sm text-gray">
                De:{" "}
                <span className="line-through">
                  {CurrencyFormat(product.prevPrice)}
                </span>
              </span>
            </div>

            <Counter />
          </div>

          <div>
            <h2 className="font-bold">Descrição</h2>
            <p className="text-sm text-gray">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
              architecto! Blanditiis optio harum deserunt tempora repellat iure
              sint animi voluptatem, ipsum quasi quia sit facere voluptates
              ipsam tempore eos distinctio?
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <button className="bg-purple text-white font-bold w-full rounded-md p-2">
              <span> adicionar ao carrinho</span>
            </button>

            <div className="bg-gray-dark text-white w-full rounded-md p-2">
              <div className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-3">
                  <Truck />

                  <div className="flex flex-col leading-5">
                    <span>
                      Entrega via
                      <span className="font-bold italic"> FSPacket®</span>
                    </span>
                    <span className="text-gray-light">
                      Envio para <span className="font-bold">todo Brasil</span>
                    </span>
                  </div>
                </div>
                <span className="font-bold">Frete Grátis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block my-10">
        <h2 className="text-lg font-bold uppercase mb-10">
          Produtos da mesma marca
        </h2>
        <div
          className={`flex ${
            sameProductBrand.length < 4 ? "gap-10" : "justify-between"
          }`}
        >
          {sameProductBrand.map((product) => (
            <ProductCard key={product.id} product={product} size="sm" />
          ))}
        </div>
      </div>
    </div>
  );
}
