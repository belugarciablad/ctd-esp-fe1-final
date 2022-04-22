import { FC } from 'react';
import '../../styles/boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * @param {Boolean} esFavorito :indica si el personaje es favorito
 * @param {MouseEventHandler} onClick 
 * 
 * 
 * @returns el componente de Boton Favorito. 
 */

interface FavoriteCharacterProps {
    esFavorito: Boolean,
    onClick: React.MouseEventHandler
}

const BotonFavorito:FC<FavoriteCharacterProps>= ({esFavorito, onClick}:FavoriteCharacterProps) => {

    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;