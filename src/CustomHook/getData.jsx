import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GetDataFromApi = (url) => {
    const [getData, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetchInfo();
    }, []);
  
    const fetchInfo = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data.data);
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setIsLoading(false);
      }
    };
    return [getData, setData, isLoading, error, fetchInfo ];
}

export default GetDataFromApi;