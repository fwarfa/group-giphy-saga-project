import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function GifList() {
    const dispatch = useDispatch();
    const gifList = useSelector(store => store.gifListReducer);

    useEffect(() => {
        dispatch ({
            type: 'GET_GIF'
        })
    }, []);


    return (
        <h1>Here are some GIFs</h1>
    )
}

export default GifList;