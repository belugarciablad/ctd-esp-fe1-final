import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../actions/character.actions";
import { MouseEventHandler, useRef } from 'react'; 
import { restartPage } from '../actions/pages.actions';
import { useState } from "react";
/**
 * Esta es la pagina principal.
 * Se ve el panel de filtros junto con la grilla de personajes y la paginacion.
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const inputSearch = useRef<HTMLInputElement>(null);
   const query = (inputSearch.current)? inputSearch.current.value : ''
    
    const onClick :MouseEventHandler<HTMLButtonElement> =()=> {
        
        if(inputSearch.current){
            dispatch(fetchCharactersThunk({}));
            setInputValue("");
            dispatch(restartPage());
        }
    }
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={onClick}>Borrar búsqueda</button>
        </div>
        <Filtros inputSearch={inputSearch} inputValue={inputValue} setInputValue={setInputValue}/>
        <Paginacion query={inputValue}/>
        <GrillaPersonajes />
        <Paginacion query={inputValue}/>
    </div>
}

export default PaginaInicio