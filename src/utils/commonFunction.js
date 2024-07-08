import axios from "axios";
import { BASE_URL } from "../config/app";

export const firstLetterCapital = value => {
    const format = value.charAt(0).toUpperCase() + value.slice(1);
    return format;
};

export const FetchData = async (url, setData) => {
    try {
        // setLoading(true);
        const response = await fetch(`${BASE_URL}${url}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
    } catch (error) {
        // setError(error.message);
        console.error("Error fetching data:", error);
    } finally {
        // setLoading(false);
    }
};

export const formatOptions = (items, idKey, labelKey) => {
    return items && items.map(item => ({
        id: item[idKey],
        label: (item[labelKey])
    }));
};
export const getUrlParameter = (url, parameterName) => {
    const queryString = url.split('?')[1]; // Split at '?' to get the query string part
    if (!queryString) {
      return null; // Handle cases where there's no query string
    }
    
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(parameterName); // Return the value of the specified parameter
  };
  
