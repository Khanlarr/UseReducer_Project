import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data,setData]=useState(null);
    const [ispending,setIspending]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        setTimeout(() => {
             fetch(url)
        .then((res)=>{
            if(!res.ok){
                throw Error("Couldn't fetch the data for that resource");
            }
            return res.json()
        })
        .then(data=>{
            setData(data)
            setIspending(false);
            setError(null);
        })
        .catch(err=>{
            setIspending(false);
            setError(err.message);
        })  
        }, 1000);
    },[url])
    return { data,ispending,error}
}
 
export default UseFetch;