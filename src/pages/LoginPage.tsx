import React, { useState } from "react";
import Layout from "../layout";
import useAuth from "../hook/useAuth";
import { useHistory } from "react-router-dom"

const LoginPage = () => {

  const history = useHistory();
  const { loginUser } = useAuth();

  const [user, setUser] = useState<any>({});

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if(user.username == "alex" && user.password == "12345678") {
        loginUser(user);
        history.push('/');
    } else {
        alert("Usuario No valido");
    }
    
    
  };

  return (
    <Layout>
      <h1>Bienvenido...</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Usuario"
          onChange={(e) => setUser({ ...user, ["username"]: e.target.value })}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setUser({ ...user, ["password"]: e.target.value })}
        />
        <button>Ingresar</button>
      </form>
    </Layout>
  );
};

export default LoginPage;
