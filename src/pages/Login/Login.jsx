import React, { useState, useEffect } from 'react';
import "./Login.scss";
import MyTemplate from '../../template/MyTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from "../../app/features/CartSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "password123") {
      dispatch(setLoggedIn({ username, password })); // Envoi correct des credentials
      setError("");
    } else {
      setError("Mauvais nom d'utilisateur ou mot de passe");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <MyTemplate>
      <section className='Login'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          {error && <p className="error" style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </section>
    </MyTemplate>
  );
}

export default Login;
