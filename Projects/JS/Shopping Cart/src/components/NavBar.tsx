import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

export default function NavBar() {
  const { toggleCart, totalQuantity } = useContext(CartContext);

  return (
    <nav style={{ position: "fixed" }}>
      <Link to="/">
        <div className="card-container">
          <div className="front">Home</div>
          <div className="back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-25 -5 70 50">
              <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z"></path>
            </svg>
          </div>
        </div>
      </Link>
      <Link to="/shop">
        <div className="card-container">
          <div className="front">Shop</div>
          <div className="back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-35 0 85 35">
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
            </svg>
          </div>
        </div>
      </Link>
      <Link to="/help">
        <div className="card-container">
          <div className="front">Help</div>
          <div className="back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <text
                x="85"
                y="95"
                text-anchor="middle"
                font-size="95"
                fill="black"
              >
                ?
              </text>
            </svg>
          </div>
        </div>
      </Link>
      <button
        onClick={() => {
          toggleCart();
          window.scrollTo(0, 0);
        }}
        className="shopping-cart-btn"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -20 590 360">
          <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
        </svg>
      </button>
      {totalQuantity > 0 && (
        <div
          style={{
            position: "absolute",
            background: "red",
            color: "white",
            right: "3em",
            bottom: ".3em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "1.2em",
            height: "1.2em",
            borderRadius: "50%",
            fontFamily: "serif",
            fontSize: ".9rem",
          }}
        >
          {totalQuantity}
        </div>
      )}
    </nav>
  );
}
