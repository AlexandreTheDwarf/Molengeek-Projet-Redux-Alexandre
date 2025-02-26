import React from 'react';
import "./Login.scss";
import MyTemplate from '../../template/MyTemplate';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoggedIn } from "../../app/features/CartSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value; // Récupérer la valeur directement depuis le formulaire
    dispatch(setLoggedIn(username)); // Mettre à jour l'état de connexion avec le nom d'utilisateur
    navigate('/'); // Rediriger vers la page d'accueil après la connexion
  };

  return (
    <MyTemplate>
      <section className='Login'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username" // Assurez-vous d'ajouter un attribut 'name'
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </MyTemplate>
  );
}

export default Login;
