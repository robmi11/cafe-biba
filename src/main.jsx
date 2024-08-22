import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CartContextProvider } from "./context/cart/CartContext.jsx";
import { ModalContextProvider } from "./context/modal/ModalContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </CartContextProvider>
  </StrictMode>,
);
