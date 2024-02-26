export function CurrencyFormat(price: number) {
  const priceNumber = price;
  const formattedValue = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(priceNumber);

  return formattedValue;
}
