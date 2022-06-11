import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import { getAuth } from "firebase/auth";

const Navbar = () => {
    const [getToken, setToken] = useState([]) 
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    const auth = getAuth();
    function logout(e){
        e.preventDefault();
        auth.signOut();
        console.log('User signed out!');
        localStorage.clear();
    }
    const token = localStorage.getItem('AuthToken')
    useEffect(() => {
        const token = localStorage.getItem('AuthToken')
        setToken(token)
    },[token])
  return (
    <div id='navbar'>
        <nav class="navbar">
            <div class="logo">Design / Interior</div>
            <ul class="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#project">Продукты</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#advantages">Почему мы?</a></li>
                    <li><a href="#staff">Команда</a></li>
                    <li><a href="#servicePackages">Цены</a></li>
                    <li>  {getToken?.length > 0 ? <button onClick={logout}  className="login-button" href="#">Выйти</button> : <Link to="/signup"> <button className="login-button" href="#">Зарегистрироваться</button> </Link> } </li>
                </div>
            </ul>
        </nav>
    </div>
  )
  }

export default Navbar;
