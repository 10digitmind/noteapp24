   // page loader function 
   const form = document.querySelector('.form-container')
    const welcomeText = document.querySelector('.welcometext-container')
    const spin = document.querySelector('.loader')

        window.addEventListener('load', function(){
        setTimeout(function (){
        welcomeText.style.display = 'flex'
        form.style.display= 'flex'
        spin.style.display = 'none'

        }, 2000)
        })

        // login funcion 

                const emailInput = document.querySelector('.email-input')
                const passwordInput = document.querySelector('.password-input')
                const button = document.querySelector('.botton-text')

                button.addEventListener('click', function (e){
                let  emailvalue = emailInput.value
                    let passwordvalue = passwordInput.value
                    if (emailvalue === 'olubodekehinde2019@gmail.com' && passwordvalue === 'Password2020') {
                    button.getAttribute('href = note.html') 
                    }else { 
                    e.preventDefault()
                        alert('incorrct email or password ')
                }

                })