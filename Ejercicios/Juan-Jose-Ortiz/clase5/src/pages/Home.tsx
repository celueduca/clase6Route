import React from "react";
import LayoutMarketplace from "../layout/LayoutMarketplace";
import produtsJson from "../fakeproducts.json"
import ProductList from "../components/ListProducts/ProductList";
import ProductCard from "../components/ProductCard/ProductCard";
import useCarts from "../hooks/useCart";
import { Product } from "../components/interfaces/IProduct";

const Home = () => {
  const [products, setProducts] = React.useState(produtsJson);

  const { setItemCar,productsCart} = useCarts();

  const addItemToCart = (item: Product): void => {
    setItemCar(item);
  }
  
  return (
    <LayoutMarketplace products={productsCart}>
       <ProductList>
          {products.map((product, i: number) => (
            <ProductCard
              key={product.name + i}
              product={product}
              products={products}
              setProducts={setProducts}
              addItemToCart={addItemToCart}
              // itemBuys={itemBuys}
              // setItemBuys={setItemBuys}
              index={i}
            />
          ))}
        </ProductList>
    </LayoutMarketplace>
  );
};

export default Home;
