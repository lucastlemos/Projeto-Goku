if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar essa página...')
    window.location.href = 'index.html'
}

function sair(){
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}