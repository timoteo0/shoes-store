import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/default";
import { Home } from "./pages/Home";
import { Brands } from "./pages/Brands";
import { BrandProduct } from "./pages/Brand-product";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="product/:brand" element={<BrandProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
