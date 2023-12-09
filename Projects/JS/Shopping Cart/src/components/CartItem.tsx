import data from "../data/items.json";
import formatCurrency from "../utilities/formatCurrency";
import "../css/CartPreview.css";

type CartItemProps = {
  id: number;
  quantity: number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
};

export default function CartItem({
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItem,
  id,
  quantity,
}: CartItemProps) {
  const item = data.find((item) => item.id === id);
  if (item && quantity > 0) {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            border: "2px solid #ccc",
            marginBottom: "15px",
            gap: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "60%",
                marginRight: "10px",
              }}
              src={item.imgUrl}
              alt="image"
            />

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                maxHeight: "100%",
              }}
            >
              <span
                style={{
                  fontFamily: "serif",
                  fontSize: "1em",
                  fontWeight: "bold",
                  textAlign: "center",
                  wordBreak: "break-all",
                }}
              >
                {formatCurrency(quantity * item.price)}
              </span>
              <button
                style={{
                  border: "none",
                  scale: "1.3",
                  width: "2.2em",
                  height: "2.2em",
                  fontWeight: "bold",
                  fontFamily: "serif",
                  background: "inherit",
                  cursor: "pointer",
                }}
                onClick={() => removeItem(item.id)}
              >
                <svg
                  className="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 48 48"
                >
                  <path d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6367188 13 L 11.15625 39.029297 C 11.43025 41.862297 13.785813 44 16.632812 44 L 31.367188 44 C 34.214187 44 36.56875 41.862297 36.84375 39.029297 L 39.363281 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 19.5 18 C 20.328 18 21 18.671 21 19.5 L 21 34.5 C 21 35.329 20.328 36 19.5 36 C 18.672 36 18 35.329 18 34.5 L 18 19.5 C 18 18.671 18.672 18 19.5 18 z M 28.5 18 C 29.328 18 30 18.671 30 19.5 L 30 34.5 C 30 35.329 29.328 36 28.5 36 C 27.672 36 27 35.329 27 34.5 L 27 19.5 C 27 18.671 27.672 18 28.5 18 z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              maxWidth: "100%",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "55%",
                marginRight: ".4em",
              }}
            >
              <span style={{ marginRight: "9px" }}>{item.name}</span>
              <span
                style={{
                  fontSize: ".76em",
                  opacity: ".85",
                  fontFamily: "sans-serif",
                }}
              >
                x{quantity}
              </span>
            </div>
            <div
              style={{
                marginTop: ".5rem",
                display: "flex",
                width: "35%",
                maxWidth: "50%",
                flexDirection: "row",
                justifyContent: "center",
                gap: "1.4em",
              }}
            >
              <button
                className="btn plus"
                onClick={() => increaseItemQuantity(item.id)}
              >
                +
              </button>
              <button
                className="btn minus"
                onClick={() => decreaseItemQuantity(item.id)}
              >
                -
              </button>
            </div>
          </div>

          <span
            style={{
              fontSize: ".75em",
              fontFamily: "sans-serif",
              opacity: "0.75",
              whiteSpace: "nowrap",
            }}
          >
            {formatCurrency(item.price)}
          </span>
        </div>
      </>
    );
  }
}
