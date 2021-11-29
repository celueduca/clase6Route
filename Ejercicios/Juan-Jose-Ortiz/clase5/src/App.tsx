import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShoppingCart from "./pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route exact path="/" component={Login}></Route>
       <PrivateRoute path="/home" component={Home}></PrivateRoute>
       <PrivateRoute path="/shopping-cart" component={ShoppingCart}></PrivateRoute>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
