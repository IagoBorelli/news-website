var countErrors = 0;

document.getElementById("btnSaveMatter").addEventListener("click", (e) => {
    // Função Para Prevenir a Submição do Form
    e.preventDefault()

    const titulo = document.getElementById("titulo")
    if(titulo == null || titulo.value == '' || titulo.value.length < 3 || titulo.value.length > 50) mostrarErro("titulo", "Título Da Matéria Inválido")

    const autor = document.getElementById("autor")
    if(autor == null || autor.value == '' || autor.value.length < 3) mostrarErro("autor", "Autor Da Matéria Inválido")

    const senha = document.getElementById("senha")
    if(senha == null || senha.value == '' || senha.value.length < 8) mostrarErro('senha', "Senha Inválida")

    const confirmacaoDeSenha = document.getElementById("confirmacaoDeSenha")
    if(confirmacaoDeSenha == null || confirmacaoDeSenha.value == '' || confirmacaoDeSenha.value.length < 8) mostrarErro('confirmacaoDeSenha', "Confirmação De Senha Inválida")
    if(senha.value != confirmacaoDeSenha.value) mostrarErro('confirmacaoDeSenha', "Senha e Confirmação De Senha São Diferentes")

    const email = document.getElementById("email")
    if(email == null || email.value == '') mostrarErro('email', "E-Mail Inválido")

    const data = document.getElementById("data")
    if(data == null || data.value == '' || data.value.length < 3) mostrarErro("data", "Data Inválido")

    const fonte = document.getElementById("fonte")
    if(fonte == null || fonte.value == '' || fonte.value.length < 3) mostrarErro("fonte", "Fonte Inválido")

    const tema = document.getElementById("tema")
    if(tema == null || tema.value == '' || tema.value == 'empty') mostrarErro("tema", "Tema Inválido")

    const assunto = document.getElementById("assunto")
    if(assunto == null || assunto.value == '') mostrarErro("assunto", "Texto Inválido")
    if(assunto.value.length < 50) mostrarErro("assunto", "Texto Precisa Ter Mais de 50 caracteres")


    const visualizacaopublica = document.getElementById("visualizacaopublica")
    const visualizacaoprivada = document.getElementById("visualizacaoprivada")
    if(visualizacaopublica.checked == false && visualizacaoprivada.checked == false) mostrarErro('visualizacao', "Selecione Um Tipo de Visualização")

    if(countErrors == 0 ){
        const errorDivs = document.querySelectorAll('.erro')
        errorDivs.forEach(div => {
            div.style.display = 'none';
        });
        document.getElementById("formMatter").submit()
    }
    countErrors = 0
});

function mostrarErro(campo, mensagem){
    const field = document.getElementById(`erro${campo}`)
    field.style.display = 'block'
    field.innerHTML = mensagem
    countErrors += 1
}
