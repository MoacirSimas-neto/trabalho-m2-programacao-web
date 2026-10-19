// Valida os campos e registra a obra se não houver erros.
function validarFormulario(){

    let nomeObra = document.getElementById("nomeObra");
    let autor = document.getElementById("autor");
    let ano = document.getElementById("ano");
    let periodo = document.getElementById("periodo");
    let tipo = document.getElementById("tipo");
    let detalhamento = document.getElementById("detalhamento");

    let listaErros = document.getElementById("listaErros");

    let valorPeriodo = periodo.options[periodo.selectedIndex].value;
    let valorTipo = tipo.options[tipo.selectedIndex].value;

    let validado = true;

    // Limpa as mensagens e bordas da tentativa anterior.
    listaErros.innerHTML = "";

    nomeObra.style.border = "";
    autor.style.border = "";
    ano.style.border = "";
    periodo.style.border = "";
    tipo.style.border = "";

    if(nomeObra.value.length < 6){
        adicionarErro("O nome da obra deve possuir no mínimo 6 caracteres.");
        nomeObra.style.border = "1px solid red";
        validado = false;
    }

    if(autor.value.length < 10){
        adicionarErro("O nome do autor deve possuir no mínimo 10 caracteres.");
        autor.style.border = "1px solid red";
        validado = false;
    }

    if(ano.value == "" || isNaN(ano.value)){
        adicionarErro("O ano da obra deve ser um número válido.");
        ano.style.border = "1px solid red";
        validado = false;
    }

    if(valorPeriodo == ""){
        adicionarErro("Selecione um período válido.");
        periodo.style.border = "1px solid red";
        validado = false;
    }

    if(valorTipo == ""){
        adicionarErro("Selecione um tipo válido.");
        tipo.style.border = "1px solid red";
        validado = false;
    }

    if(validado){
        registrarObra(
            nomeObra.value,
            autor.value,
            ano.value,
            valorPeriodo,
            valorTipo,
            detalhamento.value
        );

        limparFormulario();
    }
}


// Adiciona uma mensagem à lista de erros.
function adicionarErro(mensagem){

    let listaErros = document.getElementById("listaErros");

    let li = document.createElement("li");
    let texto = document.createTextNode(mensagem);

    li.appendChild(texto);
    listaErros.appendChild(li);
}


// Cria a linha da obra, suas células e seus eventos.
function registrarObra(nome, autor, ano, periodo, tipo, detalhamento){

    let corpoTabela = document.getElementById("corpoTabela");

    let tr = document.createElement("tr");

    // Nome da obra.
    let td = document.createElement("td");
    let texto = document.createTextNode(nome);

    td.appendChild(texto);
    tr.appendChild(td);

    // Autor.
    td = document.createElement("td");
    texto = document.createTextNode(autor);

    td.appendChild(texto);
    tr.appendChild(td);

    // Ano.
    td = document.createElement("td");
    texto = document.createTextNode(ano);

    td.appendChild(texto);
    tr.appendChild(td);

    // Período.
    td = document.createElement("td");
    texto = document.createTextNode(periodo);

    td.appendChild(texto);
    tr.appendChild(td);

    // Tipo.
    td = document.createElement("td");
    texto = document.createTextNode(tipo);

    td.appendChild(texto);
    tr.appendChild(td);

    // Botão de exclusão.
    td = document.createElement("td");

    let botao = document.createElement("input");

    botao.type = "button";
    botao.value = "Excluir";
    botao.onclick = excluirObra;

    td.appendChild(botao);
    tr.appendChild(td);

    // Exibe o detalhamento ao clicar na linha.
    tr.onclick = function(){
        document.getElementById("detalhesObra").innerHTML = detalhamento;
    };

    corpoTabela.appendChild(tr);
}


// Solicita confirmação e exclui a linha do botão clicado.
function excluirObra(){

    let confirmar = window.confirm("Deseja realmente excluir esta obra?");

    if(confirmar){
        let td = this.parentElement;
        let tr = td.parentElement;
        let index = tr.rowIndex;
        let tBody = tr.parentElement;
        let table = tBody.parentElement;

        table.deleteRow(index);
    }
}


// Limpa os campos após o cadastro.
function limparFormulario(){

    document.getElementById("nomeObra").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";

    document.getElementById("periodo").selectedIndex = 0;
    document.getElementById("tipo").selectedIndex = 0;

    document.getElementById("detalhamento").value = "";
}
