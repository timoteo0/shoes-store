import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/default";
import { Home } from "./pages/Home";
import { Brands } from "./pages/Brands";
import { BrandProduct } from "./pages/Brand-product";
import { Product } from "./pages/Product";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="product/:brand" element={<BrandProduct />} />
          <Route path="product/page/:id" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
