import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./compos/Nav";
import Home from "./compos/Home";
import Page from "./compos/pages/checks/page";
import Banks from "./compos/pages/banks/Banks";
import Statistics from "./compos/pages/statistics/Statistics";
import { ThemeProvider } from "./components/ui/theme-provider";
import PageClients from "./compos/pages/clients/PageClients";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checks" element={<Page />} />
          <Route path="/clients" element={<PageClients />} />
          <Route path="/banks" element={<Banks />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
