import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonCard =(pokemon) =>{
    return(
        <div className="movie-card">
                <img loading="lazy" src={pokemon.pokemon.sprites.front_default} alt="" />
                <h2>{pokemon.pokemon.name}</h2>
                <Link to={`/Pokemon/${pokemon.pokemon.id}`} >Detalhes</Link>
        </div>      
    )
}
export default PokemonCard