import '../../styles/grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import React, { FC, useEffect, useState } from "react";
import Character from "../../types/character.types";
import {TypedUseSelectorHook,useDispatch, useSelector as useReduxSelector} from "react-redux";
import { IRootState } from "../../store/store";
import { fetchCharactersThunk } from "../../actions/character.actions";

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */

 export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const GrillaPersonajes:FC = () => {

        const dispatch = useDispatch();
      
        const { characters: characters, status, } = useSelector((state) => state.characters);
      
        useEffect(() => {dispatch(fetchCharactersThunk(""));}, []);
      
        if (status === "LOADING") return <div>Cargando personajes...</div>;
        if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
        if (!characters || characters.length === 0) return <></>;

    return <div className="grilla-personajes">
       {characters.map(char => <TarjetaPersonaje key={char.id+"character"} character={char} />)}
    </div>
}
 
export default GrillaPersonajes;