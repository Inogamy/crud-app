import modalhtml from './render-modal.html?raw'
import { User } from "../../models/user";
import './render-modal.css'
import { getUserById } from '../../user_case/get_user_by_id';


let modal, form;
let loadUser = {};

export const showModal = async (id) =>{
    modal?.classList.remove('hide-modal');
    loadUser = {};

    if (!id) return
    const user = await getUserById(id);
    setFormValue(user)
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset()
}

const setFormValue = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadUser = user;
}

export const renderModal = (element, callback) => {

    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalhtml;
    modal.className = ('modal-container hide-modal');
    form = modal.querySelector('form');

    modal.addEventListener('click', (event) => {
        if ( event.target.className === 'modal-container'){
            hideModal();
        }
    });

    form.addEventListener( 'submit', async (event) =>{
        event.preventDefault()
                
        const formData = new FormData( form );
        const userLike = {...loadUser}

        for ( const [key, value] of formData){
            if ( key === 'balance'){
                userLike[key] = +value;
                continue;
            }

            if ( key === 'isActive'){
                userLike[key] = ( value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        await callback( userLike )

        hideModal();

    })

    element.append(modal)

}