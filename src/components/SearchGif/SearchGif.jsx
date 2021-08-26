import{useState} from 'react'
function SearchGif () {
    let [search, setSearch] = useState();
    const searchGiPhy = () => {
        console.log('On search for giphy')
    }
    return(
        <>
        <h1>Search for Giphy</h1>
        <input type="text" placeholder="search" onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={searchGiPhy}>Search</button>
        </>
    )
}

export default SearchGif