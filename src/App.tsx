import { Header } from "./components/Header";
import "./index.css";

import offers from "./assets/ofertas.png";
import { BrandCard } from "./components/Brand-card";

function App() {
  return (
    <>
      <Header />
      <img className="w-full" src={offers} />

      <div className="px-24 py-10 flex justify-center gap-10">
        <BrandCard />
      </div>
    </>
  );
}

export default App;
