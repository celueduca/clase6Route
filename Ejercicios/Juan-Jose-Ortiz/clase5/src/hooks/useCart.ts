import { useState, useEffect } from "react";
import { Product } from "../components/interfaces/IProduct";

const useCart = () => {
  
  const [productsCart, setProductsCart] = useState<Product[]>([]);

  const setItemCar = (product: Product): void => {
    const findProduct: number = productsCart.findIndex(
      (element) => element.name === product.name
    );
    if (findProduct === -1) {
      const itemBuy = {
        name: product.name,
        value: product.value,
        url: product.url,
        quantity: 1,
      };
      let newListItemBuys: Product[] = [...productsCart, itemBuy]; // [ {name, value, quantity}]
      setProductsCart(newListItemBuys);
      localStorage.setItem("cart", JSON.stringify(newListItemBuys));
    } else {
      productsCart[findProduct].quantity++;
      let newListItemBuys: Product[] = [...productsCart];
      setProductsCart(newListItemBuys);
      localStorage.setItem("cart", JSON.stringify(newListItemBuys));
    }
  };

  useEffect(() => {
    const itemsCart = localStorage.getItem("cart") || "";
    console.log(itemsCart)
    if (itemsCart !== "") setProductsCart(JSON.parse(itemsCart));
  }, []);

  return {
    productsCart,
    setProductsCart,
    setItemCar,
  };
};

export default useCart;
