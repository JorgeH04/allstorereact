import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from 'axios';

import {
  setToken,
  deleteToken,
  getToken,
  initAxiosInterceptors
} from './Helpers/auth-helpers';

import Nav from './components/Nav';
import Loading from './components/Loading';
import Error from './components/Error';
import Signup from './Vistas/Signup';
import Login from './Vistas/Login';
import Upload from './Vistas/Upload';
//import Feed from './Vistas/Feed';
//import Post from './Vistas/Post';
//import Explore from './Vistas/Explore';
import Perfil from './Vistas/Perfil';

import Main from './components/Main';

import About from "./components/Products/About";
import Product from "./components/Product";

import Updatee from "./components/Updatee";

import Home from "./components/Home";
import Cart from "./components/Products/Cart";

import Update from "./Crud/Update";
import Updatedos from "./Crud/Updatedos";

import Destacados from "./Crud/Destacados";    

import ProductFeatured from "./components/Products/ProductFeatured";
import ProductFDetails from "./components/Products/ProductFDetails";
import ProductDetails from "./components/Products/ProductDetails";
import ProductDosDetails from "./components/Products/ProductDosDetails";

import Footer from './components/Footer';

 //import { useHistory } from "react-router-dom";
// history.push("/cart");


initAxiosInterceptors();

export default function App() {

  //return <h1>¡Bienvenido al curso!</h1>;
  const [usuario, setUsuario] = useState(null); // no sabemos si hay un usuario autenticado
  const [cargandoUsuario, setCargandoUsuario] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    async function cargarUsuario() {
      if (!getToken()) {
        setCargandoUsuario(false);
        return;
      }
      try {
        const { data: usuario } = await Axios.get('http://localhost:4000/api/usuarios/whoami');
        setUsuario(usuario);
        setCargandoUsuario(false);
      } catch (error) {
        console.log(error);
      }
    }
    cargarUsuario();
  }, []);



  async function login(email, password) {
    const { data } = await Axios.post('http://localhost:4000/api/usuarios/login', {
      email,
      password
    });
    setUsuario(data.usuario);
    setToken(data.token);
  }


  async function signup(usuario) {
    const { data } = await Axios.post('http://localhost:4000/api/usuarios/signup', usuario);
    setUsuario(data.usuario);
    setToken(data.token);
  }


  function logout() {
    setUsuario(null);
    deleteToken();
  }



  function mostrarError(mensaje) {
    setError(mensaje);
  }



  function esconderError() {
    setError(null);
  }



  if (cargandoUsuario) {
    return (
      <Main center>
        <Loading />
      </Main>
    );
  }


  return (
    <Router>
      <Nav 
      usuario={usuario} 
      logout={logout} 
      />


    <Route path="/about" component={About} />


     <Error mensaje={error} esconderError={esconderError} />


    <Route exact path="/">
          <Home />
          <ProductFeatured />

    </Route>



      <Route path="/destacados" component={Destacados}  />
      <Route path="/update" component={Update}  />
      <Route path="/updatedos" component={Updatedos}  />



      <Route path="/updatee" component={Updatee}  />
    
      <Route
          path="/featured/:_id"
          children={<ProductFDetails></ProductFDetails>}
     ></Route>




     <Route exact path="/products">
        <Product />
     </Route>
     <Route exact path="/productdos">
        <Product />
     </Route>


      <Route
        path="/products/:_id"
        children={<ProductDetails></ProductDetails>}
      ></Route>


      <Route
        path="/productdos/:_id"
        children={<ProductDosDetails></ProductDosDetails>}
      ></Route>

   

      {usuario ? (
        <LoginRoutes
          mostrarError={mostrarError}
          usuario={usuario}
          logout={logout}
        />
      ) : (
        <LogoutRoutes
          login={login}
          signup={signup}
          mostrarError={mostrarError}
        />
      )}

            <Footer />

    </Router>
  );
}




function LoginRoutes({ mostrarError, usuario, logout }) {
  return (
    <Switch>

  <Route path="/destacados" component={Destacados}  />
  <Route path="/update" component={Update}  />

  <Route path="/updatee" component={Updatee}  />

  <Route
      path="/upload"
      render={props => <Upload {...props} mostrarError={mostrarError} />}
      />


  <Route
      path="/perfil/:username"
      render={props => (
          <Perfil
            {...props}
            mostrarError={mostrarError}
            usuario={usuario}
            logout={logout}
          />
        )}
  />
   
     
     <Route
      path="/logout"  
      //component={logout}
      render={props => (
        <Signup
        {...props} 
        logout={logout} 
        //mostrarError={mostrarError} 
        />
      )}
  />
   


     <Route 
       path="/cart"
       render={props => (
        <Cart
          {...props}
          mostrarError={mostrarError}
          usuario={usuario}
          logout={logout}
        />
      )}
       />
 
    </Switch>
  );
}
function LogoutRoutes({ login, signup, mostrarError }) {
  return (
    <Switch>

      <Route
        path="/login/"
        render={props => (
          <Login {...props} login={login} mostrarError={mostrarError} />
        )}
      />

      <Route
        path="/signup/"
        render={props => (
          <Signup  
          {...props} 
          signup={signup} 
          mostrarError={mostrarError} 
          />
        )}
        default
      />

      <Route path="/cart">
          <Cart />
      </Route>


    </Switch>
  );
}
