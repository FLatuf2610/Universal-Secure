const form = document.querySelector('#form');
const error = document.querySelector('.error');


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const texto = document.getElementById('textareasiniestro').value;
    const hora = document.getElementById('hora').value;
    const fecha = document.getElementById('fecha').value
    const array = [texto, hora, fecha];

    const destruccion_total = document.getElementById('destruccion_t');
    const destruccion_parcial = document.getElementById('destruccion_p');
    const extension_responsabilidad = document.getElementById('extension');
    const robo = document.getElementById('robo');
    const inun_granizo = document.getElementById('inun_granizo');
    const incendio = document.getElementById('incendio');
    const array2 = [destruccion_total, destruccion_parcial, extension_responsabilidad, robo, inun_granizo, incendio]
    const selected = []

    array2.map((element) => {
        if(element.checked == true){
            selected.push(element)
        }
    })

    
    if(selected.length >= 2){
        alert('Se debe seleccionar un solo siniestro')
    }

    
    if(array.includes('') || selected.length == 0){
        error.classList.add('activo')

    }

    
    else{
        error.classList.remove('activo')
        console.log('enviado')
    }
})