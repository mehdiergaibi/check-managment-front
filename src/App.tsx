import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./compos/Nav";
import Home from "./compos/Home";
import Page from "./compos/pages/checks/page";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/checks" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
