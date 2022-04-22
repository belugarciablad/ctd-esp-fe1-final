import './paginacion.css';
import {previousPage,nextPage} from '../../actions/pages.actions';
import {useDispatch} from "react-redux";
import { useSelector } from "../../store/store";
import { fetchCharactersThunk } from '../../actions/character.actions';
import { FC, useEffect } from 'react';
import PaginaFavoritos from '../../paginas/Favoritos.pagina';
import { pageReducer } from '../../reducers/page.reducer';
import { Pages } from '@material-ui/icons';
import characterReducer from '../../reducers/character.reducer';
import { RefObject } from 'react';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
interface PaginacionProps{
 query: string
}

// const Paginacion = () => {
const Paginacion:FC<PaginacionProps> = ({query}:PaginacionProps) => {

    const dispatch = useDispatch(); 

    const {page} = useSelector((state) => state.page)
    

    // pagenumber hace referencia a la cantidad de paginas totales en cada busqueda
    const pagenumber = useSelector((state) => state.characters.pagenumber )

    const handleNextPage = () =>{
        if (page<pagenumber){
            dispatch(fetchCharactersThunk({query:query,page:page+1}))
            dispatch(nextPage())
        }
    }

    const handlepreviousPage =()=>{
        dispatch(fetchCharactersThunk({query:query,page:page-1}))
        dispatch(previousPage())
    }

    return <div className="paginacion">
        <button disabled={page===1} className={"primary"} onClick={handlepreviousPage}>Anterior</button>
        <button disabled={page===pagenumber} className={"primary"} onClick={handleNextPage}>Siguiente</button>
    </div>
}

export default Paginacion;