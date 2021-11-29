import React, { useEffect, useState } from "react";
import { Product } from "../interfaces/IProduct";
import Car from "./Car";
// import Car from './Car';

interface Props {
  products: Product[];
}

const SubHeader = ({ products }: Props) => {
  const [flag, setflag] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems]= useState(0);
  const toggleOpen = () => {
    if (products.length !== 0) {
      setDropdown(!dropdown);
    }
  };

  useEffect(() => {
    if (products.length > 0) {
      setflag(true);
      // calcule total de compras
      let totalCar = 0;
      let totalItems = 0;
      products.forEach((element) => {
        totalCar = totalCar + element.value * element.quantity;
        totalItems +=  element.quantity
      });
      setTotal(totalCar);
      setTotalItems(totalItems)
    }
  }, [products]);

  return (
    <>
      <li className="nav-item dropdown dropstart">
        <p
          className="nav-link dropdown-toggle"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={toggleOpen}
        >
          Items Car
        </p>
        <ul
          className={`dropdown-menu ${dropdown ? "show" : ""}`}
          aria-labelledby="navbarDropdown"
        >
          {flag &&
            products.map((element, i: number) => (
              <li className="dropdown-item" key={i}>
               <span className="text-info"> {element.quantity} </span> <span className="text-uppercase ms-3">{element.name} .</span>
              </li>
            ))
          }
          <div className="dropdown-divider"></div>
          {<li className="dropdown-item text-end"> Subtotal <span className="text-info  ms-2"> $ {total}</span></li>}
          
        </ul>
      </li>
      <Car totalProducts={totalItems}/>
    </>
  );
};

export default SubHeader;
