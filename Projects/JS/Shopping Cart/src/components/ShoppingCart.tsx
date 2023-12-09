import { useContext } from "react";
import "../css/Shop.css";
import formatCurrency from "../utilities/formatCurrency";
import { CartContext } from "../contexts/CartContext";

type ShoppingCartProp = {
  id: number;
  name: string;
  price: number;
  inStock: number;
  imgUrl: string;
};

export function ShoppingCart({
  id,
  name,
  price,
  inStock,
  imgUrl,
}: ShoppingCartProp) {
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    getItemQuantity,
  } = useContext(CartContext);

  const quantity = getItemQuantity(id);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img src={imgUrl} alt="image" />
      <div
        style={{
          padding: "5px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontSize: "1.2em",
            paddingRight: "15px",
          }}
        >
          {name}
        </span>
        <div
          style={{
            fontFamily: "sans-serif",
            fontSize: ".95em",
            opacity: ".8",
          }}
        >
          {formatCurrency(price)}
        </div>
      </div>
      <div
        style={{
          fontFamily: "cursive",
          opacity: ".7",
          fontSize: ".8em",
          padding: "3px 10px 10px 5px",
        }}
      >
        Stock Level: {inStock}
      </div>
      {quantity === 0 ? (
        <button
          className="add-to-cart-btn"
          onClick={() => increaseItemQuantity(id)}
        >
          Add to Cart
        </button>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: ".5rem",
          }}
        >
          <div style={{ display: "flex" }}>
            <button
              onClick={() => increaseItemQuantity(id)}
              style={{
                width: "3em",
                height: "3em",
                marginRight: "1em",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                background: "#007bff",
                color: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>+</span>
            </button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span>In Cart:</span>
              <span style={{ fontSize: "1.4em" }}> {quantity} </span>
            </div>
            <button
              onClick={() => decreaseItemQuantity(id)}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "3em",
                height: "3em",
                marginLeft: "1em",
                padding: "10px",
                border: "none",
                background: "#007bff",
                color: "white",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>-</span>
            </button>
          </div>
          <div>
            <button
              onClick={() => removeItem(id)}
              style={{
                padding: "10px",
                borderRadius: "10%",
                width: "90px",
                border: "none",
                background: "#dc3545",
                color: "white",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
