import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { UserContext } from "../../../../context/UserContext"

const LoginForm = () => {

  const { updateUser } = useContext(UserContext);

  const [ logError, setLogError ] = useState('');
  const [ showPwd, setShowPwd ] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const email = data.get("email");
    const password = data.get("password");
    
    if (email && password) {
      try {
        if (email == "test@example.com" && password == "abc123*"){
          updateUser("demo")
          localStorage.setItem("tortilla", "dePatatas")
          return navigate('/profile');
        }
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/auth/login`,
          JSON.stringify({ email, password }),
          {
            headers: { 
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        console.log(res);
        if (res.data.success === true) {
          updateUser(res.data.user);
          return navigate('/profile');
          }
        }
       catch (error) {
        console.log("Wrong email or password.");
        setLogError("Wrong email or password.");
      }
    } else {
      console.log('Invalid email or password format.');
      setLogError('Invalid email or password format.')
    }
  };

  return (
    <article id="login-formArticle">
      <Form id="login-formContainer" onSubmit={handleSubmit}>
        <h1 id="login-title">¡Te damos la bienvenida!</h1>
        <Form.Group id="login-userContainer" className="mb-3" controlId="formBasicEmail">
          <Form.Label className="login-label">Usuario</Form.Label>
          <Form.Control type="email" name="email" placeholder="palomaocanha@severalenergy.com" className="login-input"/>
        </Form.Group>

        <Form.Group id="login-pwdContainer" className="mb-3" controlId="formBasicPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control type={showPwd ? 'text' : 'password'} name="password" placeholder="password" className="login-input" />
          <label htmlFor="login-showPwdInput" id="login-showPwdLabel"><img src="./img/ojo.png" alt="Show password eye icon" /></label>
          <input type="checkbox" id="login-showPwdInput" value={showPwd} onChange={() => setShowPwd(prev => !prev)}/>
        </Form.Group>
        <Button variant="primary" type="submit" id="login-submitButton">
          Ingresar
        </Button>
      </Form>
    </article>
  );
};

export default LoginForm;
