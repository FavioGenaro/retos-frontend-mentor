
const formulario = document.querySelector('form');

const validarEmail = formulario.addEventListener('submit', (e) =>{

    const email = e.srcElement[0].value;

    if(email !== 'Dismiss message'){
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(email)) {
            console.log("Valido");
        } else {
            console.log("No valido");
            e.preventDefault();
        }
    }
});