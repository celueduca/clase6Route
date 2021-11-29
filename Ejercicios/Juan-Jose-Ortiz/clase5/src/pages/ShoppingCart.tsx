import React from 'react'
import LayoutMarketplace from '../layout/LayoutMarketplace'
import useCarts from "../hooks/useCart";
import ItemCart from '../components/Cart/ItemCart';

const ShoppingCart = () => {
    const { productsCart} = useCarts();
    return (
       <LayoutMarketplace products={productsCart}>
           {productsCart.length > 0  ?
            <div className="row">
                <div className="col-8 mt-2">
                        {productsCart.map((item,i) => (
                            <>
                                <ItemCart product={item}></ItemCart>
                            </>
                        ))}
                </div>
                <div className="col-4 mt-2">
                    <button className="btn btn-info "> Comprar</button>
                </div>

            </div>
            :
            <div className="mt-5 ">
                <h3>No hay items agregados</h3>
            </div>

           }


       </LayoutMarketplace>
    )
}

export default ShoppingCart