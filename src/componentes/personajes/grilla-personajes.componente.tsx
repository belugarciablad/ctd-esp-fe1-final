import '../../styles/grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, { FC, useEffect, useState } from "react";
import Character from "../../types/character.types";
import {TypedUseSelectorHook,useDispatch} from "react-redux";
import { useSelector } from "../../store/store";
import { fetchCharactersThunk } from "../../actions/character.actions";



/** 
 * Grilla de 20 personajes para la pagina de inicio
 *  
 * @returns un componente TarjetaPersonaje por cada personaje con el correspondiente filtro
 */
const GrillaPersonajes:FC = () => {

        const dispatch = useDispatch();
        
        const { characters: characters, status, } = useSelector((state) => state.characters);
      
        useEffect(() => {dispatch(fetchCharactersThunk({}));}, []);
      
        if (status === "LOADING") return <div>Cargando personajes...</div>;
        if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
        if (!characters || characters.length === 0) return <></>;

    return <div className="grilla-personajes">
       {characters.map(char => <TarjetaPersonaje key={char.id+"character"} character={char} />)}
    </div>
}
 
export default GrillaPersonajes;