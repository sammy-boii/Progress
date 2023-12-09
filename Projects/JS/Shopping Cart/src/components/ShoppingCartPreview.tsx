import { useContext, useEffect } from "react";
import { CartContext } from "../contexts/CartContext";
import "../css/CartPreview.css";
import CartItem from "./CartItem";
import formatCurrency from "../utilities/formatCurrency";
import itemsData from "../data/items.json";

// ternary operators doesn't require {}

export default function ShoppingCartPreview() {
  const {
    toggleCart,
    isOpen,
    cartItems,
    getItemQuantity,
    totalQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
  } = useContext(CartContext);

  useEffect(() => {
    const overlay = document.querySelector(".cart-overlay");
    if (overlay) {
      overlay.addEventListener("click", toggleCart);
    }
  });

  return isOpen ? (
    <>
      <div
        className="cart-overlay"
        style={{
          position: "fixed",
          background: "rgba(0, 0, 0, 0.5)",
          top: 0,
          left: 0,
          minWidth: "100vw",
          minHeight: "100vh",
          zIndex: 1000,
        }}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className="shopping-cart-preview"
          style={{
            position: "absolute",
            minHeight: "100vh",
            width: "65vh",
            borderRadius: "3%",
            top: "0",
            right: "0",
            transition: "transform 500ms ease-in-out",
            animation: "slide-cart",
            backgroundColor: "#fff",
            padding: "20px",
            zIndex: 2000,
          }}
        >
          <span
            style={{
              fontSize: "1.7em",
              fontWeight: "800",
              color: "#555",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
            }}
          >
            Shopping Cart
          </span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1.2em",
                fontWeight: "bold",
                color: "#333",
                padding: "5px",
                marginBottom: ".7em",
              }}
              onClick={() => {
                toggleCart();
              }}
            >
              X
            </button>
          </div>
          {cartItems.map((item) => (
            <div
              style={{
                display: "grid",
                gridTemplateRows: "repeat(auto-fill, minmax(100px, 1fr))",
              }}
              key={item.id}
            >
              <CartItem
                id={item.id}
                quantity={getItemQuantity(item.id)}
                increaseItemQuantity={increaseItemQuantity}
                decreaseItemQuantity={decreaseItemQuantity}
                removeItem={removeItem}
              />
            </div>
          ))}
          {totalQuantity > 0 && (
            <div
              style={{
                marginBottom: "1em",
                fontSize: "1.7em",
                marginTop: ".3em",
                display: "flex",
                flexDirection: "row",
                gap: ".01em",
                fontWeight: "800",
                color: "#444",
                textTransform: "uppercase",
                textShadow: "3px 3px 3px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span>Total:</span>
              <div
                style={{
                  marginLeft: ".4em",
                  alignSelf: "center",
                  letterSpacing: "1.3px",
                  fontFamily: "Montserrat",
                  height: "100%",
                  fontSize: ".7em",
                  wordBreak: "break-all",
                }}
              >
                {formatCurrency(
                  cartItems.reduce((total, cartItem) => {
                    const item = itemsData.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </div>
            </div>
          )}

          {totalQuantity == 0 && (
            <div
              style={{
                textAlign: "center",
                transform: "translateY(150%)",
                fontSize: "2.5em",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "700",
                color: "#333",
                letterSpacing: "2px",
                textTransform: "uppercase",
                textShadow: "5px 5px 5px rgba(0, 0, 0, 0.3)",
              }}
            >
              Your Cart is Empty! 🤡🤡
            </div>
          )}
        </div>
      </div>
    </>
  ) : null;
}
