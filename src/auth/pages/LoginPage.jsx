import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import { useForm } from "../../hooks/useForm";
import { toast } from "react-toastify";

export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {username, password, onInputChange, onResetForm} = useForm({ username: 'CaptainAmerica', password: 'superPassword' });

  const handleLogin = () => {
    if (!username) return  toast.warning('Please enter a valid username');
    
    const lastPath = localStorage.getItem('lastPath') || '/';

    login(username)
    navigate(lastPath, { replace: true });
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100" >
    <div className="login-container p-4">
      <h1 className="text-center mb-4">Login</h1>
      <form>
        <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-primary w-100"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
