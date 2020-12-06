import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';
//mport imagenSignup from '../imagenes/signup.png';     <img src={imagenSignup} alt="" className="Signup__img" />
     

export default function Signup({ signup, mostrarError }) {
  const [usuario, setUsuario] = useState({
  //  username: '',
    password: '',
    email: '',

    //bio: '',
    nombre: ''
  });


  function handleInputChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }


  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signup(usuario);
    } catch (error) {
      mostrarError(error.response.data);
      console.log(error);
    }
  }
  return (



    <section className="container stylization maincont">


        <ul className="b-crumbs">
            <li>
                <a href="index.html">
                    Home
                </a>
            </li>
            <li>
                <span>Registration / Login</span>
            </li>
        </ul>
        <h1 className="main-ttl"><span>Create una cuenta</span></h1>
        <div className="auth-wrap">
            <div className="auth-col">
                <h2>Registrarse</h2>
                <form onSubmit={handleSubmit} class="login">
                    <p>
                        <label for="username">Nombres
                        <span class="required">*</span>
                        </label>
                        <input 
                        type="text" 
                        id="username"
                        name="nombre"
                        onChange={handleInputChange}
                        value={usuario.nombre}
                        />
                    </p>
                    <p>
                        <label for="username">E-mail 
                        <span class="required">*</span>
                        </label>
                        <input 
                        type="email" 
                        name="email"
                        id="username"
                        onChange={handleInputChange}
                        value={usuario.email}
                        />
                    </p>
                    <p>
                        <label for="password">Contraseña 
                        <span class="required">*</span></label>
                        <input 
                        type="password" 
                        id="password"
                        name="password"

                        onChange={handleInputChange}
                        value={usuario.password}
                        />
                    </p>
                    <p className="auth-submit">
                        <input type="submit" value="Signup"/>
                        <input type="checkbox" id="rememberme" value="forever"/>
                    </p>
                    <p className="auth-lost_password">
                        <a href="#">Lost your password?</a>
                    </p>
                </form>
            </div>
            <div className="auth-col">
                <h2>Registrate con redes sociales</h2>
                
            </div>
        </div>



    </section>

  );
}