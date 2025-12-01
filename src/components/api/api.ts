import axios from 'axios';
const apiUrl = 'http://test-eventexpertv-5joh0p-8d631a-31-97-60-222.traefik.me' 


export const getLandingPage = async (token:string) => {
    const response = await axios.get(`${apiUrl}/api/public/landingpage/${token}`);
    return response;
};