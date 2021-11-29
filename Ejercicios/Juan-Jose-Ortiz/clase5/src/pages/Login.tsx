import React from "react";
import "./Login.css";
import { User } from "../components/interfaces/IUser";
import useAuth from "../hooks/useAuth";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { loginUser } = useAuth();
  const [user, setUser] = React.useState<User>({ username: "", password: "" });
  const [efect, setEfect] = React.useState<boolean>(false);
  const history = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("usuario iniciando sesion");
    console.log(user);
    if (user.username === "usuario1" && user.password === "usuario1") {
      loginUser(user);
      history.push("/home");
    }
  };
  const assignValue = (event: any) => {
    if (event.target.value.length === 0) {
      setEfect(false);
    } else {
      setEfect(true);
    }
    setUser({ ...user, password: event.target.value });
  };
  return (
    <div className="container-fluid">
      <div className=" row d-flex  justify-content-center m-0 p-0 mt-5">
        <div className="col-12 col-md-8 col-lg-5 m-0 p-0 ">
          <form className="FormLogin" onSubmit={handleSubmit}>
            <p className="fs-5 text-center text-uppercase bg-3 letter-3 FormLogin-title--letterspacing ">
              Inicio de
              <span className={efect ? "animated-shadow" : ""}> Sesión</span>
            </p>
            <div className="form-group row p-0 m-0">
              <label className="form-label mt-4 "> Username</label>
              <input
                className="FormLogin-input"
                type="text"
                placeholder="Ingresa el usuario"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="form-group  row  p-0 m-0">
              <label className="form-label "> Username</label>
              <input
                className="FormLogin-input"
                type="password"
                placeholder="Ingresa la contraseña"
                onChange={(e) => assignValue(e)}
              />
            </div>
            <div className="d-grid gap-2 mt-4 mb-4 p-4">
              <button className="btn btn-info btn-block">Ingresar</button>
            </div>
            <div className="forn-group">
              <p className="FormLogin-links">¿No tienes una cuenta ?</p>
              <p className="FormLogin-links">Olvide mi contraseña</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
