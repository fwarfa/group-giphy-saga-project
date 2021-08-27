import{useState} from 'react'
import { useDispatch } from 'react-redux';
function SearchGif () {
    // const searchResult = useSelector(store => store.gifListReducer);
    const dispatch = useDispatch();

    let [search, setSearch] = useState();
    const searchGiPhy = () => {
        console.log('On search for giphy')
        dispatch({
            type:'FETCH_SEARCH_RESULTS',
            payload: search
        })
    }
    return(
        <>
        <h1>Search for Giphy</h1>
        <input type="text" placeholder="search" onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={searchGiPhy}>Search</button>
        {/* <img src={} alt="" /> */}
        </>
    )
}

export default SearchGif