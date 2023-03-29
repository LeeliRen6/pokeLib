import React from "react";
import { useState, useEffect } from "react";
import PokemonCard from "../components/PokemonCard";

import './PokemonGrid.css';

const pokeAPI = import.meta.env.VITE_API

const Home = () =>{
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async(url)=>{
        const res = await fetch(url);
        const data = await res.json();
        var arrayInfos = data.results.map(x=>{
            return x.url
        });
        
        getInformations(arrayInfos)
    }
    const getInformations = async(urls)=>{
        var array = [];
        Promise.all(urls.map(async url =>{
            var res = await fetch(url)
            const data = await res.json();
            array.push(data)
        }))
        .then(response=>{
            array.sort((a, b)=>{
                return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;}
            )
            setPokemons(array)
        })
    }
    useEffect(()=>{
        //const pokemonUrl = `${pokeAPI}pokemon/`
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
         getPokemons(pokemonUrl);
    }, [])

    return (
        <div className="container">
            <h2 className="title">Pokemons</h2>
            <div className="pokemon-container">
                {pokemons.length === 0 && <p>Carregando...</p>}
                {pokemons.length > 0 && pokemons.map((pokemon)=> <PokemonCard key={pokemon.name} pokemon={pokemon} />)}
            </div>
        </div>
    )
}
export default Home;