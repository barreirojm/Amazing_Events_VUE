function captureData() {
    let name = document.getElementById('name_form')
    let email = document.getElementById('email_form')
    let message = document.getElementById('msg_form')

    let dataForm = {
        [name.name]: name.value,
        [email.name]: email.value,
        [message.name]: message.value
    }
    
    console.log(dataForm);

    alert(`Hi there ${dataForm.name} , thanks for reaching out.\nWe've received your message and will get back to you as soon as possible at your email: ${dataForm.email}\nAmazing Events.-`);  

}

