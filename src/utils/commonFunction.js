import axios from "axios";
import { BASE_URL } from "../config/app";

export const firstLetterCapital = value => {
    const format = value.charAt(0).toUpperCase() + value.slice(1);
    return format;
};

export const FetchData = async (url, setData) => {
    try {
        // setLoading(true);
        const response = await axios.get(`${BASE_URL}${url}`);
        setData(response.data);
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
