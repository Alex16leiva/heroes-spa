import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  
  const { login } =  useContext( AuthContext );
  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    login('Alexander')
    navigate(lastPath, { replace: true });
  }

  return (
    <>
      <h1 className="container mt-5">Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={onLogin}
      >
        Login
      </button>
    </>
  )
}
