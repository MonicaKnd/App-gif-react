import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { getGifs } from '../helpers/getGifs';
import { GifGridtem } from './GifGridtem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);
    
    // const [count, setCount] = useState(0);
    // const [images, setImages] = useState([]);


    // useEffect( () => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category])

   
    //getGifs();
    
    return (
        <>  
            <h3>{category}</h3>

            {/* {loading ? 'Cargando...' : 'Data cargada'} */}
            {loading && <p>Loading</p>}
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridtem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }            
            </div>
        </>
    )
}
