import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/default";
import { Home } from "./pages/Home";
import { Brands } from "./components/Brands";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
