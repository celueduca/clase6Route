import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Product } from "../components/interfaces/IProduct";

interface Props {
  products: Product[];
  children: any;
}

const LayoutMarketplace = ({ children, products }: Props): JSX.Element => {
  return (
    <>
      {/* <Header title="Marketplace" products={itemBuys}  add={add} /> */}
      <Header title="marketPlace" products={products} />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default LayoutMarketplace;
