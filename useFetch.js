import { useEffect, useRef, useState } from 'react';

export const useFetch = (url) => {

    const isAplied = useRef(true)
    const [state, setState] = useState({ data: null, loading: true, error: null });
 
    useEffect(() => {
      
        return () => {
           isAplied.current = false;
        }
    }, [])
    


    useEffect( () => {
        setState({ data: null, loading: true, error: null });    
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {


            setTimeout( () => {

                if (isAplied.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })                   
                } 
            }, 2000);

        }) 
    
    }, [url])
    

return state;
}

