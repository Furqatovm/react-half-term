import axios from "axios";
import { useState, useEffect } from "react";

const useAxios =(url) =>{
    const [Data, setData] =useState([]);
    const [error, setError] =useState(null);
    const [loading, setLoading] =useState(true);

   useEffect(() =>{
    axios.get(`https://dummyjson.com/${url}`).then((res) => setData(res.data.products))
    .catch((error) =>setError(error))
    .finally(() =>setLoading(false));
   }, [url])

   return {Data, error, loading};

} 

export default useAxios

