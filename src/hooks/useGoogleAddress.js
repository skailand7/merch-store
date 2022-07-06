import { useState, useEffect } from "react";


const useGoogleAddress = (address) =>{

    const [map, setMap] = useState({});
    const API = `http://api.positionstack.com/v1/forward?access_key=941c5db64269304c28d01c6538342194&query=${address}`;

    useEffect(async()=>{
        const response = await fetch(API);
        const data = await response.json();
        const dataArray = data.data
        setMap(dataArray[0])
    },[])
    return map;
}

export default useGoogleAddress;
