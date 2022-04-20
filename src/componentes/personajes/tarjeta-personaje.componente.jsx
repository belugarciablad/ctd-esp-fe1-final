import BotonFavorito from '../botones/boton-favorito.componente';
import '../../styles/tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character}) => {

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name}/>
        <div className="tarjeta-personaje-body">
            <span>{character.name}</span>
            <BotonFavorito esFavorito={character.favorite} />
        </div>
    </div>
}

export default TarjetaPersonaje;