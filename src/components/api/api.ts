import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL 


export const getLandingPage = async (token:string) => {
    const response = await axios.get(`${apiUrl}/api/public/landingpage/${token}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
};