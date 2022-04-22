import '../../styles/filtros.css';
import {FC,ChangeEvent, RefObject, useState} from 'react'
import {useDispatch} from "react-redux";
import { fetchCharactersThunk } from "../../actions/character.actions";
import { restartPage } from '../../actions/pages.actions';


interface SearchBarProp{
  inputSearch : RefObject<HTMLInputElement>,
  inputValue: string,
  setInputValue: (query:string)=>void
  
}
/**
 * Filtro de busqueda de personajes. Se reinicia con el componente boton.
 * @param inputSearch hace referncia al campo de busqueda, que nos servira para hacer el reinicio al presionar en el boton de borrar filtros.
 * @returns <FC>
 */
const Filtros: FC<SearchBarProp> = ({inputSearch,inputValue,setInputValue}:SearchBarProp
  ) => {

  const dispatch = useDispatch();

  // ante un cambio de evento en el input de busqueda se despacha la busqueda con query.
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(fetchCharactersThunk({query:query}));
    dispatch(restartPage()); 
    setInputValue(query);
  };

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input 
            ref={inputSearch}
            type="text" 
            placeholder="Rick, Morty, Beth, Alien, ...etc" 
            onChange={onChange} 
            value={inputValue}
        />
    </div>
}

export default Filtros;