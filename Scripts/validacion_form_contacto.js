const form = document.querySelector('#formcontacto');
const error = document.querySelector('.error');
const contacto = document.querySelector('#infodecontacto')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const texto = document.getElementById('texto').value;
    const array = [nombre, apellido, correo, telefono, texto];
    if (array.includes('')){
        error.classList.add('activo')
    }
    else{
        error.classList.remove('activo')
        contacto.classList.add('showed')
    }
})

