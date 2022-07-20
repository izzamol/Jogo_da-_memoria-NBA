const input = document.querySelector('.login-input')
const button = document.querySelector('.loginButton')
const form = document.querySelector('.loginForme')



const validarInput = ({target}) =>{
    if(target.value.length > 1){
       return button.removeAttribute('disabled')
    }

    button.setAttribute('disabled', '')

    
}


const controleSubimit = (event) =>{

    event.preventDefault();

    localStorage.setItem('Player', input.value)

    window.location = 'game.html'
   
}

form.addEventListener('submit', controleSubimit)
input.addEventListener("input", validarInput)


