import { showModal } from '../render-modal/render-modal';
import './render-app-button.css'

export const renderAppButton = (element) => {

    const fabButton = document.createElement('buton');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener( 'click', () =>{
        showModal();
    })

}