
export interface findProps{
  name?:string,
  page?:number
}

export const findCharacterAPI = async ({name, page}:findProps) => {
    let params = "?";
    // params += `page=${page}`
    params += page? `page=${page}` : '';
    params += (name&&page)? `&`: '';
    params += name ? `name=${name}` : '';
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
      .then((response) => response.json())
      .then((data)=>{
        return{
          characters : data.results,
          lastpage: data.info.pages
        }
      });
  };
