import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "react-use-cart";
import "./index.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider id="bazzar_product">
      <App />
    </CartProvider>
  </React.StrictMode>
);
