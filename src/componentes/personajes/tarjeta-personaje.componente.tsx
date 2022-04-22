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
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
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
