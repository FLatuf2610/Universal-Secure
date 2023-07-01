const form = document.querySelector('#formcotiza');
const error = document.querySelector('.error');
const gracias = document.querySelector('#gracias')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const dni = document.getElementById('dni').value;
    const fecha = document.getElementById('fecha').value
    const array = [nombre, apellido, correo, telefono, dni, fecha];

    const vidainvalidez = document.getElementById('vida-invalidez');
    const vehiculo = document.getElementById('vehiculo');
    const comercio = document.getElementById('comercio');
    const inmueble = document.getElementById('inmueble');
    const array2 = [vidainvalidez, vehiculo, comercio, inmueble];
    var selected = [];
   
    array2.map((element) => {
        if(element.checked == true){
            selected.push(element)
        }
    })
    
    
    if (array.includes('') || selected.length == 0 ){
        //alert('Todos los campos son obligatorios')
        error.classList.add('activo')
        
    }


    else{
        console.log('enviado')
        error.classList.remove('activo')
        gracias.classList.add('showed')
    }
})
