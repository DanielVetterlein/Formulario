document.getElementById('usuario-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = document.getElementById("usuario-form");

    const dados = {};
    const formData = new FormData(form);

    formData.forEach((valor, chave) => {
        if(dados[chave]){
            if(!Array.isArray(dados[chave])){
                dados[chave] = [dados[chave]];
            }
            dados[chave].push(valor);
        }else{
            dados[chave] = valor;
        }
    });

    const senha = dados.senha;
    const senhaConfirmada = dados['confirmar-senha']

    if (senha.length === 0 || senhaConfirmada.length === 0) {
        alert('Por favor, preencha ambos os campos de senha');
    }
    else if(senha === senhaConfirmada){
        alert('Senhas conferem!');
        alert("Formulário enviado com sucesso!");
        console.log(dados);
    }else{
        document.getElementById('senha').classList.add('Borda-erro');
        document.getElementById('confirmar-senha').classList.add('Borda-erro');
        alert('Senhas não conferem');
    }
});