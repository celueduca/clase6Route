import React from "react";
import { Product } from "../interfaces/IProduct";

interface Props {
  product: Product;
}

const ItemCart = ({ product }: Props) => {
  return (
    <div className="card mb-4 ">
      <div className="row g-0">
        <div className="col-4">
          <img src={product.url} alt="imagen" width="200px" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title"> {product.name}</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet,
              facilis?.
            </p>
            <p className="card-text">
                Cantidad de productos
              <small className="text-info fs-6"> {product.quantity}</small>
            </p>
            <p className="card-text">
                Total producto
              <small className="text-info fs-6"> $ {product.value * product.quantity}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
