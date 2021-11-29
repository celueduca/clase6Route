import React from "react";

interface Props {
  children: any;
}

const ProductList = ({ children }: Props) => {
  return (
    <section>
      <p className="fs-5 mt-3">Listado de productos</p>
      <hr className="mb-4" />
      <div className="row">{children}</div>
    </section>
  );
};

export default ProductList;
