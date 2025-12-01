import axios from 'axios';
// const apiUrl = import.meta.env.VITE_API_BASE_URL 
const apiUrl = 'https://test-eventexpertv-5joh0p-8d631a-31-97-60-222.traefik.me';


export const getLandingPage = async (token:string) => {
    const response = await axios.get(`${apiUrl}/api/public/landingpage/${token}`);
    return response;
};