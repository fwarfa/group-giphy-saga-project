import{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import GoogleMaps from '../googleMaps/GoogleMaps';

function SearchGif () {
    const giphyResults = useSelector(store => store.gifListReducer);
    const lawFirms = useSelector(store=> store.lawFirmReducer);
    console.log('lawFirm reducer is', lawFirms)
    const dispatch = useDispatch();

    let [search, setSearch] = useState();
    let [ lawFirmName, setLawFirmName] = useState()
    let [lawFirmCity, setLawFirmCity] = useState();
    let [lawFirmState, setLawFirmState] = useState();
    const searchGiPhy = () => {
        console.log('On search for giphy')
        dispatch({
            type:'FETCH_SEARCH_RESULTS',
            payload: search
        })
    }
    const getLawFirms =(event) =>{
      event.preventDefault()
      console.log("on get law firm button")
      dispatch({
        type: "FETCH_LAWFIRM_RESULTS",
        payload: {
          lawFirmName,
          lawFirmCity,
          lawFirmState,
        },
      });
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
          {giphyResults.map((searchlocations) => {
            return (
              //  <iframe
              //    src={searchlocations.bitly_gif_url}
              //    class="giphy-embed"
              //  ></iframe>
              <img
                key={searchlocations.id}
                src={searchlocations.images.original.url}
                alt=""
              />
            );
          })}
        </div>
        <h1>Search for law firm</h1>
        <form onSubmit={getLawFirms}>
          <input
            type="text"
            placeholder="Law firm name"
            onChange={(event) => setLawFirmName(event.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            onChange={(event) => setLawFirmCity(event.target.value)}
          />
          <input
            type="text"
            placeholder="State"
            onChange={(event) => setLawFirmState(event.target.value)}
          />
          <button type="submit">Search for company</button>
        </form>
        <br />
         <GoogleMaps lawFirms={lawFirms} />
       
     
        
      </>
    );
}

export default SearchGif