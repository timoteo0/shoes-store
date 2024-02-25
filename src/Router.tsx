import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/default";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
