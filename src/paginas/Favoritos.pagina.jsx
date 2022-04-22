import { useDispatch } from "react-redux";
import { cleanAllFavorites } from "../actions/favoriteCharacter";
import FavoritosGrilla from '../componentes/personajes/grilla-favoritos.componente'
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const dispatch = useDispatch();

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button onClick={()=>dispatch(cleanAllFavorites())} className="danger">Eliminar Favoritos</button>
        </div>
        <FavoritosGrilla />
    </div>
}

export default PaginaFavoritos