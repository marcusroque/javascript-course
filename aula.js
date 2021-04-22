function VerificarEntrada() {
    NomeConvidado = document.getElementById('nome').Value;
    ConvidadoPor = ['Amanda', 'Sabrina', 'Rafael', 'Billy']
    if (ConvidadoPor.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce pode Entrar!'
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Voce nao pode Entrar!'
    }
}
