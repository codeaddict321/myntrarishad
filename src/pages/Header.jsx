import React from "react";
import Cart from "../assets/cart.png"
// import logo from './icon.jpeg';
// import Searchbar from "./Components/Searchbar.jsx";
// import CartLogo from './Components/CartLogo.jsx';
import SearchBar from "../components/SearchBar";
export default function Header({search,setSearch}){
    return (
        <header>
            <nav>
                <div className="nav-left">
                    {/* <div className="logo">
                        <a href="/"><img src={logo} alt="logo"></img></a>
                    </div> */}
                    <div className="nav-menu">
                        <ul>
                            <li><a href="/">MEN</a></li>
                            <li><a href="/">WOMEN</a></li>
                            <li><a href="/">KID</a></li>
                        </ul>
                    </div>
                </div>
                <SearchBar search={search} setSearch={setSearch} />
                {/* <Searchbar/>
                <CartLogo/> */}
              <div className="cart__container">
              <img src={Cart} alt="" />
                </div> 
            </nav>
        </header>
    )
}

