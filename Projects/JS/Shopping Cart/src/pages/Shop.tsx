import itemsData from "../data/items.json";
import { ShoppingCart } from "../components/ShoppingCart";
import "../css/Shop.css";
export const Shop = () => {
  return (
    <>
      <div style={{ marginTop: "4em" }} className="shop-container">
        {itemsData.map((item) => (
          <ShoppingCart
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            inStock={item["In Stock"]}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </>
  );
};
