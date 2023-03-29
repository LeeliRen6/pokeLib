import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import {TbPokeball} from "react-icons/tb"
const Navbar = () =>{
    return(
        <nav id="navbar">
            <h2>
                <Link to="/"> <TbPokeball />PokeLib</Link>
            </h2>
        </nav>
    )
}
export default Navbar