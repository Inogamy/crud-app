import { loadUsersByPage } from "../user_case/load-users-by-page";


const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    loadUsersByPage( state.currentPage + 1)
    
}

const loadPreviusPage = async () => {
    throw new Error('No implementado');
}

const onUserChanged = () => {
    throw new Error('No implementado');
}

const reloadPage = () => {
    throw new Error('No implementado');
}

export default {
    loadNextPage,
    loadPreviusPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}