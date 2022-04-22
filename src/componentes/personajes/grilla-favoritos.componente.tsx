import '../../styles/grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "../../store/store";

/** 
 * Grilla de personajes para la pagina de favoritos.
 * Permite agregar y elimiar un favorito, asi como reiniciar todos los favoritos presionando en el boton de eliminar.
 *  
 * @returns un componente TarjetaPersonaje por cada personaje favorito
 */

const FavoritosGrilla:FC = () => {
 
    const favMap = useSelector((state) => state.favorites.favoritesMap);

    return <div className="grilla-personajes">
       {Array.from(favMap.values()).map(char => ( <TarjetaPersonaje key={char.id+"favorite"}character={char}/>))}
    </div>
}
 
export default FavoritosGrilla;