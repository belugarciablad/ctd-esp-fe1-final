import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from "react-redux";
import { fetchCharactersThunk } from "../actions/character.actions";
import { MouseEventHandler, useRef } from 'react'; 
import { restartPage } from '../actions/pages.actions';
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */

const PaginaInicio = () => {

    const dispatch = useDispatch();

    const inputSearch = useRef<HTMLInputElement>(null);
    
    const onClick :MouseEventHandler<HTMLButtonElement> =()=> {
        if(inputSearch.current){
            dispatch(fetchCharactersThunk(''));
            inputSearch.current.value = "";
            dispatch(restartPage());
        }
    }
    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={onClick}>Borrar búsqueda</button>
        </div>
        <Filtros inputSearch={inputSearch} />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio