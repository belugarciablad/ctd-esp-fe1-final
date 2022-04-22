import BotonFavorito from '../botones/boton-favorito.componente';
import '../../styles/tarjeta-personaje.css';
import Character from '../../types/character.types';
import { FC } from 'react';
import { addFavorite, removeFavorite } from '../../actions/favoriteCharacter';
import {TypedUseSelectorHook,useDispatch, useSelector as useReduxSelector} from "react-redux";
import { IRootState } from '../../store/store';
import { CenterFocusStrongOutlined } from '@material-ui/icons';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * @param {Character} character: Personaje que se renderiza en la tarjeta
 * 
 * @returns un JSX element 
 */
interface CharacterCard{
    character: Character
}

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const TarjetaPersonaje:FC<CharacterCard>= ({character}:CharacterCard) => {

    const dispatch = useDispatch()
    const {favoritesMap} = useSelector((state)=>state.favorites)
    let esFavorito = favoritesMap.has(character.id);

    /**
     * Funcion para agregar o quitar favoritos
     * @returns void
    */
    const handleFavorite=()=>{
        !esFavorito ? dispatch(addFavorite(character)) : dispatch(removeFavorite(character));
    }

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={esFavorito} onClick={handleFavorite} />
        </div>
    </div>
}

export default TarjetaPersonaje;
