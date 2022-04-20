import Character from "../types/character.types";

export const findCharacterAPI = async (name?: string, page?:number) => {
    let params = "?";
    params += page ? `page=${page}` : '';
    params += (name&&page)? `&`: '';
    params += name ? `name=${name}` : '';
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
      .then((response) => response.json())
      .then((data)=>{
        return{
          characters : data.results,
          nextpage: data.info.next || ''
        }
      });
  };

  // tipar los characters con la promesa
  // (characters: Promise<Character[]>) 