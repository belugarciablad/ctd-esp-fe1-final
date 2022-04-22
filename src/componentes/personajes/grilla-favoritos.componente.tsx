import '../../styles/grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "../../store/store";

/**
 * Grilla de favoritos para la pagina de favoritos
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */


const FavoritosGrilla:FC = () => {
 
    const favMap = useSelector((state) => state.favorites.favoritesMap);

    return <div className="grilla-personajes">
       {Array.from(favMap.values()).map(char => ( <TarjetaPersonaje key={char.id+"favorite"}character={char}/>))}
    </div>
}
 
export default FavoritosGrilla;