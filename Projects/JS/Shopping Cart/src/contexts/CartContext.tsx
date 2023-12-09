import { createContext, ReactNode, useState } from "react";
import "../css/Shop.css";
import { useLocalStorage } from "../hooks/useLocalStorage";
type CartContextProviderProps = {
  children: ReactNode;
};

type CartItems = {
  id: number;
  quantity: number;
};

// if you want you can include every details of the item. it'll reduce the several lines of code.

type CartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  toggleCart: () => void;
  isOpen: boolean;
  totalQuantity: number;
  cartItems: CartItems[];
};

// these are the values I intend to pass to different parts of the program

export const CartContext = createContext({} as CartContext);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItems[]>("", []);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const totalQuantity = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseItemQuantity(id: number) {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((item) => item.id === id) === undefined) {
        return [...currentCartItems, { id: id, quantity: 1 }];
      } else {
        return currentCartItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((item) => item.id === id)?.quantity === 1) {
        return currentCartItems.filter((item) => item.id !== id);
      } else {
        return currentCartItems.map((item) => {
          if (item.id === id && item.quantity > 0) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItem(id: number) {
    setCartItems((currentCartItems) => {
      return currentCartItems.filter((item) => item.id !== id);
    });
  }

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider
      value={{
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItem,
        getItemQuantity,
        isOpen,
        toggleCart,
        cartItems,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
