import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./compos/Nav";
import Home from "./compos/Home";
import Page from "./compos/pages/checks/page";
import Client from "./compos/pages/clients/Client";
import Banks from "./compos/pages/banks/Banks";
import Statistics from "./compos/pages/statistics/Statistics";
import { ThemeProvider } from "./components/ui/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checks" element={<Page />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/banks" element={<Banks />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );  
}

export default App;
