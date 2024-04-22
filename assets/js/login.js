function entrar(){

    let usuario = document.querySelector('#usuario')
    let labelUsuario = document.querySelector('#labelUsuario')

    let senha = document.querySelector('#senha')
    let labelSenha = document.querySelector('#labelSenha')

    let msgError = document.querySelector('#msgError')

    let listaUser = []

    let validUsuario = {
        nome: '',
        usuario: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(usuario.value == item.usuarioCad && senha.value == item.senhaCad){
            validUsuario = {
                nome: item.nomeCad,
                usuario: item.usuarioCad,
                senha: item.senhaCad
            }
        }
    })

    if(usuario.value == validUsuario.usuario && senha.value == validUsuario.senha){
        window.location.href = 'pagprincipal.html'
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)
        
    } else {
        usuario.setAttribute('style', 'border-color: red')
        labelUsuario.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        labelSenha.setAttribute('style', 'color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
    }

}