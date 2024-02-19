import usersStore from "../../store/users-store";
import './render-buttons.css'
import { renderTable } from "../render-table/render-table"


export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';

    const prevButton = document.createElement('button');
    prevButton.innerText = '< Previus';

    const currentPageLAbel = document.createElement('span');
    currentPageLAbel.id = 'current-page';
    currentPageLAbel.innerText = usersStore.getCurrentPage();

    element.append(prevButton, currentPageLAbel, nextButton)

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPageLAbel.innerText = usersStore.getCurrentPage();
        renderTable(element)
    })

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviusPage();
        currentPageLAbel.innerText = usersStore.getCurrentPage();
        renderTable(element)
    })

}