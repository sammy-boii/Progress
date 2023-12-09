import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>
);
