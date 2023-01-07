import { useNavigate, } from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from 'axios';

import "./Login.css"


function Login() {
    const navigate = useNavigate();

    const[user,setUser] =useState({
        name : '',
        passw: ''
    }) 


    const handleChange = e =>{
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
  const handleSubmit =async() =>{
    try{
        const name = user.name
        const passw = user.passw
        const data = await axios.post("http://localhost:3002/api/login",
        {
            name,
            passw
        }
        )
        const cadena = data.data
        if(cadena == "Usuario encontrado"){
            alert("Credenciales validas, ingrese")
            navigate("/Monitoreo")
        }
        else{
            alert("Usuario o contraseña invalidos")
        }
       
    } catch(error){
        alert(error)
    }
   
  }    





  return (
    <div>
      <div>
        <section  className="containerlgn">

            <h2 className="Login-text-h2">L O G I N </h2>

  
          <form >
            <input onChange={handleChange} name="name" className="input" placeholder="Username" class= "input" type="text" id = 'name' required  />
            <hr/>
            <input onChange={handleChange} name="passw" className="dipo" placeholder="Password" class= "input" type="password" id = 'pass' required  />
          </form>
          <button onClick={handleSubmit} className="btn_Login"> ENTRAR </button>

  
        </section>    
      </div>
    </div>

  );


}


export default Login;