import './paginacion.css';
import {previousPage,nextPage} from '../../actions/pages.actions';
import {useDispatch} from "react-redux";
import { useSelector } from "../../store/store";
import { fetchCharactersThunk } from '../../actions/character.actions';
import { useEffect } from 'react';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */

const Paginacion = () => {

    const dispatch = useDispatch(); 

    const {page:page} = useSelector(state => state.page)
    
    useEffect(() => {dispatch(fetchCharactersThunk(""));}, []);

    return <div className="paginacion">
        <button disabled={false} className={"primary"} onClick={()=>dispatch(previousPage())}>Anterior</button>
        <button disabled={false} className={"primary"} onClick={()=>dispatch(nextPage())}>Siguiente</button>
    </div>
}

export default Paginacion;