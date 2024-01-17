import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "./context/UserContext";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './App.css';


function App() {
  const [user, setUser] = useState("");
  const [cookies, setCookies] = useState("");

  const updateUser = (data) => {
    setUser(data);
  };

  const signOut = () => {
    Cookies.remove("access-token");
    setCookies("");
  };

  useEffect(() => {
    const cookie = Cookies.get("access-token");
    cookie ? setCookies(cookie) : setCookies("");

    async function getCurrentUser(token) {
      const user = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/auth/currentuser/${token}`
      );
      setUser(user.data.user);
    }

    if (cookies) {
      getCurrentUser(cookies);
    } else {
      setUser("");
    }
  }, [cookies]);

  // PRUEBA DE LLAMADAS A SERVIDORES
  useEffect(() => {

    async function serverTest() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}`);
        console.log(res.data);
      } catch (error) {
        console.log('SERVER ERROR');
        console.log(error);
      }
    };

    async function candelaTest() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_CANDELA}/cups20`,
          JSON.stringify({ cups20: "ES0021000003953495JE0F" }),
          {
            headers: { 
              "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        console.log(res.data);
      } catch (error) {
        console.log('CANDELA ERROR');
        console.log(error);
      }
    };

    async function invoiceTest() {
      try {
        const res = await axios.post(`${import.meta.env.VITE_INVOICE}/invoice`);
        console.log(res);
        console.log(res.data);
      } catch (error) {
        console.log('INVOICE ERROR');
        console.log(error);
      }
    }

    serverTest();
    candelaTest();
    invoiceTest();
  }, [])

  const data = { user, updateUser, signOut };

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={data}>
          {user ? <Header /> : ""}
          <Main />
        </UserContext.Provider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;;

