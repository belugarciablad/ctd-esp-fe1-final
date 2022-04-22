import '../../styles/paginacion.css';
import {previousPage,nextPage} from '../../actions/pages.actions';
import {useDispatch} from "react-redux";
import { useSelector } from "../../store/store";
import { fetchCharactersThunk } from '../../actions/character.actions';
import { FC } from 'react';

/**
 * Componente que contiene los botones para paginar
 * 
 *@param string query : texto de busquededa para mantener la busqueda al cambiar la pagina
 * 
 * 
 * @returns un JSX element Componente Paginacion
 */
interface PaginacionProps{
 query: string
}

const Paginacion:FC<PaginacionProps> = ({query}:PaginacionProps) => {

    const dispatch = useDispatch(); 

    const {page} = useSelector((state) => state.page)
    

    // pagenumber hace referencia a la cantidad de paginas que trae cada busqueda
    const pagenumber = useSelector((state) => state.characters.pagenumber )

    // funcion para manejar el click en pagina siguiente
    const handleNextPage = () =>{
        if (page<pagenumber){
            dispatch(fetchCharactersThunk({query:query,page:page+1}))
            dispatch(nextPage())
        }
    }
    // funcion para manejar el click en pagina anterior
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