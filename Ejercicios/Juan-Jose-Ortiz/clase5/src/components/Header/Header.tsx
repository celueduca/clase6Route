import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Product } from "../interfaces/IProduct";
import SubHeader from "./SubHeader";
import "./Header.css";

interface Props {
  title: string;
  products: Product[];
}

const Header = ({ title, products }: Props) => {
  const history = useHistory();
  const { userCurrent } = useAuth();
  const logout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("cart");
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pt-3">
      <div className="container-fluid d-flex justify-space-between">
        <p className="navbar-brand align-middle text-uppercase">{title}</p>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
                <span className="visually-hidden">(current)</span>
              </Link>
            </li>
            <SubHeader products={products} />
          </ul>
          <ul className="navbar-nav">
            <li>
              <span className="navbar-text me-3">
                Bienvenido: <i className="fas fa-user"></i>{" "}
                {userCurrent().username}
              </span>
            </li>
            <li onClick={logout} className="nav-item LogoutLink">
              {" "}
              <i className="fas fa-sign-out-alt"></i> Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
