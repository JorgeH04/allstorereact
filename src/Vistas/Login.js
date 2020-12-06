import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from '../components/Main';


export default function Login({ login, mostrarError }) {
  const [emailYPassword, setEmailYPassword] = useState({
    email: '',
    password: ''
  });



  function handleInputChange(e) {
    setEmailYPassword({
      ...emailYPassword,
      [e.target.name]: e.target.value
    });
  }

  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(emailYPassword.email, emailYPassword.password);
    } catch (error) {
      mostrarError(error.response.data);
      console.log(error);
    }
  }
  return (

    
    <section class="container stylization maincont">


        <ul class="b-crumbs">
            <li>
                <a href="index.html">
                    Home
                </a>
            </li>
            <li>
                <span>Login</span>
            </li>
        </ul>
        <h1 class="main-ttl"><span>Login</span></h1>
        <div class="auth-wrap">
            <div class="auth-col">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}class="login">
                    <p>
                        <label for="username">E-mail <span class="required">*
                        </span></label>
                        <input 
                        type="email"
                        name="email"
                        id="username"
                        onChange={handleInputChange}
                        value={emailYPassword.email}
                        />
                    </p>
                    <p>
                        <label for="password">Password <span class="required">*</span>
                        </label>
                        <input 
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputChange}
                        value={emailYPassword.password}
                        />
                    </p>
                    <p class="auth-submit">
                        <input type="submit" value="Login"/>
                        <input type="checkbox" id="rememberme" value="forever"/>
                        <label for="rememberme">Remember me</label>
                    </p>
                    <p class="auth-lost_password">
                        <a href="#">Lost your password?</a>
                        <a href="#">No tenés una cuenta?<Link to="/signup">Signup</Link></a>
                    </p>
                </form>
            </div>
            <div class="auth-col">
                <h2>Login con Redes sociales</h2>
               
            </div>
        </div>



    </section>

  );
}