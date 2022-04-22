import '../../styles/filtros.css';
import {FC,ChangeEvent, RefObject} from 'react'
import {useDispatch} from "react-redux";
import { fetchCharactersThunk } from "../../actions/character.actions";
import { restartPage } from '../../actions/pages.actions';


interface SearchBar{
  inputSearch : RefObject<HTMLInputElement>;
}

const Filtros: FC<SearchBar> = ({inputSearch}:SearchBar) => {

  const dispatch = useDispatch();

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    dispatch(fetchCharactersThunk(query));
    dispatch(restartPage());
  };

    return <div className="filtros">
        <label>Filtrar por nombre:</label>
        <input 
            ref={inputSearch}
            type="text" 
            placeholder="Rick, Morty, Beth, Alien, ...etc" 
            onChange={onChange} 
        />
    </div>
}

export default Filtros;