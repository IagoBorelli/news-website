var countErrors = 0;
document.getElementById("btnSaveUser").addEventListener("click", (e) => {
    // Função Para Prevenir a Submição do Form
    e.preventDefault()

    // Validações Do Nome Completo
    const nome = document.getElementById("nome")
    if(nome == null || nome.value == '' || nome.value.length < 3) mostrarErro("nome", "Nome Completo Inválido")

    // Validações Do Nome De Usuário
    const usuario = document.getElementById("usuario")
    if(usuario == null || usuario.value == '' || usuario.value.length < 3) mostrarErro('usuario', "Nome De Usuário Inválido")

    // Validações Do CPF
    const cpf = document.getElementById("cpf")
    if(cpf == null || cpf.value == '' || cpf.value.length != 11) mostrarErro('cpf', "CPF Inválido")
    if (cpf.value == "00000000000") mostrarErro('cpf', "CPF Inválido");
    validarCPF(cpf.value)

    // Validações Do E-Mail
    const email = document.getElementById("email")
    if(email == null || email.value == '') mostrarErro('email', "E-Mail Inválido")

    // Validações Do Endereço
    const endereco = document.getElementById("endereco")
    if(endereco == null || endereco.value == '' || endereco.value.length < 3) mostrarErro('endereco', "Endereço Inválido")

    // Validações Do Telefone
    const telefone = document.getElementById("telefone")
    if(telefone == null || telefone.value == '' || telefone.value.length != 11) mostrarErro('telefone', "Telefone Inválido")

    // Validações Da Senha
    const senha = document.getElementById("senha")
    if(senha == null || senha.value == '' || senha.value.length < 8) mostrarErro('senha', "Senha Inválida")

    // Validações Da Confirmação de Senha
    const confirmacaoDeSenha = document.getElementById("confirmacaoDeSenha")
    if(confirmacaoDeSenha == null || confirmacaoDeSenha.value == '' || confirmacaoDeSenha.value.length < 8) mostrarErro('confirmacaoDeSenha', "Confirmação De Senha Inválida")
    if(senha.value != confirmacaoDeSenha.value) mostrarErro('confirmacaoDeSenha', "Senha e Confirmação De Senha São Diferentes")

    // Validações De Perfil
    const perfilUsuario = document.getElementById("perfilUsuario")
    const perfilColunista = document.getElementById("perfilColunista")
    const perfilAdm = document.getElementById("perfilAdm")
    if(perfilUsuario.checked == false && perfilColunista.checked == false && perfilAdm.checked == false ) mostrarErro('perfil', "Selecione Um Perfil Para o Usuário")
    
    if(countErrors == 0 ){
        const errorDivs = document.querySelectorAll('.erro')
        errorDivs.forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById("formRegister").submit()
    }
    countErrors = 0
});

function validarCPF(cpf) {
    var Soma;
    var Resto;
    Soma = 0;

    for (i=1; i<=9; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(9, 10)) ) mostrarErro('cpf', "CPF Inválido");

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(cpf.substring(10, 11) ) ) mostrarErro('cpf', "CPF Inválido");
}

function mostrarErro(campo, mensagem){
    console.log(mensagem)
    const field = document.getElementById(`erro${campo}`)
    field.style.display = 'block'
    field.innerHTML = mensagem
    countErrors += 1
}
