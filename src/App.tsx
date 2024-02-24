import { Header } from "./components/Header";
import "./index.css";

import offers from "./assets/ofertas.png";

function App() {
  return (
    <>
      <Header />
      <img className="w-full" src={offers} />
    </>
  );
}

export default App;
