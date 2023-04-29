
function validateRequired(element) {

    if (element.value == '') {
        element.setAttribute('style', 'border-color:red')
    } else {
        element.removeAttribute('style')
    }

}

function verifyInterests() {
    const interests = document.querySelectorAll('#interests')
    console.log(interests)
    for (let i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            return true
        }
    }
    return false

}

function verifyNoEmpty(element) {
    if (element.value == '') {
        element.setAttribute('style', 'border-color:red')
        element.setAttribute('placeholder', 'Complete el campo')
        return false
    } else {
        element.removeAttribute('style')
    }
    return true


}



function showErrors(errors) {
    let messageError = 'Se encontraron los siguientes errores en el formulario:\n';
    for (let i = 0; i < errors.length; i++) {
        messageError += errors[i] + '\n'

    }

    alert(messageError)
}

function register() {
    verifyInterests()
    let errors = []


    const email = document.getElementById('email')
    if (!verifyNoEmpty(email)) {
        errors.push('Debe ingresar un correo')
    }
    const name = document.getElementById('nombre')
    if (!verifyNoEmpty(name)) {

        errors.push('Debe ingresar un nombre')
    }
    const date = document.getElementById('fecha')
    if (!verifyNoEmpty(date)) {

        errors.push('Debe ingresar una fecha')
    }
    const sex = document.getElementById('sexo')

    if (!verifyInterests()) {
        errors.push('Debe seleccionar un intereses')
    }

    if (errors.length > 0) {
        showErrors(errors)
        console.log(errors)
        return
    }

    const interests = document.querySelectorAll('#interests')
    let selectedInterest = []
    for (let i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            selectedInterest.push(interests[i].value)
        }
    }

    const request = {
        email: email.value,
        name: name.value,
        brirthdate: date.value,
        sex: sex.value,
        interests: selectedInterest

    }
    console.log(request)
    alert('Usted se ha registrado satisfactoriamente')

}