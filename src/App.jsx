import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

import {
  Navbar,
  HomePage,
  CryptoDetails,
  CryptoCurrencies,
  Exchanges,
  News,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="main">
        <div className="routes">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<CryptoCurrencies />}
            />
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route exact path="/exchanges" element={<Exchanges />} />
            <Route exact path="/news" element={<News />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
