import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Pokemon = () =>{
    const { id } = useParams();
    const[infos, setInfos] = useState(null);
    const getInfos = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setInfos(data);
      };

      useEffect(() => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;
        getInfos(pokemonUrl);
      }, []);
      console.log(infos)
    return(
        <div>
            
            <div>
            {infos && (
                <>
                    <img src={infos.sprites.front_default} alt="" />
                    <p>{infos.name}</p>
                    {Object.values(infos.types).map((x)=>{
                         <p key={x.type}>{x.type}</p>
                    })}
                    <div className="stats">
                        <div className="title">Status</div>
                        <div className="linha">
                            {infos.stats.map((x)=>{
                                return (
                                    <div>
                                    <h3>{`${x.stat.name} - ${x.base_stat}`}</h3>
                                    {/* <h3>{x.stat.name}</h3><p>{x.base_stat}</p> */}
                                    
                                    </div>  

                                )
                            })}
                        </div>
                        
                    </div>
                    <div className="moves">
                        <div className="title">Moves</div>
                        <div className="list">
                            {infos.moves.map(x=>{
                                return <p>{x.move.name}</p>
                            })}
                        </div>
                    </div>
                </>
                
            ) }
           
            </div>
        </div>
    )
}
export default Pokemon;