import{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
function SearchGif () {
    const searchResult = useSelector(store => store.gifListReducer);
    console.log(searchResult)
    const dispatch = useDispatch();

    let [search, setSearch] = useState();
    const searchGiPhy = () => {
        console.log('On search for giphy')
        dispatch({
            type:'FETCH_SEARCH_RESULTS',
            payload: search
        })
    }
    return (
      <>
        <h1>Search for Giphy</h1>
        <input
          type="text"
          placeholder="search"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={searchGiPhy}>Search</button>
        <div>
            {searchResult.map((searchItems) => {
               return (
                 //  <iframe
                 //    src={searchItems.bitly_gif_url}
                 //    class="giphy-embed"
                 //  ></iframe>
                 <img src={searchItems.images.original.url} alt="" />
               );
            })}
        </div>
      </>
    );
}

export default SearchGif