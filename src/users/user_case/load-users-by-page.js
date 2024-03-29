import { localhostUserToModel } from "../mappers/localhost-user.mapper";

const extractUserData = (apiResponse) => {
    if (apiResponse && apiResponse.data && Array.isArray(apiResponse.data)) {
        return apiResponse.data;
    } else {
        // En caso de que la estructura de la respuesta no sea la esperada
        console.error('La estructura de la respuesta de la API no es la esperada.');
        return [];
    }
}

export const loadUsersByPage = async (page = 1) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();

    const users = data.map( localhostUserToModel );
    
    return users;

}

