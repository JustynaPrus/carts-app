import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartsList } from "./components/CartsList/CartsList";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CartsList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
