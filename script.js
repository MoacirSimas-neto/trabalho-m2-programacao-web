// =====================================
// VALIDAÇÃO DO FORMULÁRIO
// =====================================

function validarFormulario(){

    let nomeObra = document.getElementById("nomeObra");
    let autor = document.getElementById("autor");
    let ano = document.getElementById("ano");
    let periodo = document.getElementById("periodo");
    let tipo = document.getElementById("tipo");
    let detalhamento = document.getElementById("detalhamento");

    let listaErros = document.getElementById("listaErros");

    let validado = true;


    // Pega o valor selecionado nos campos select
    let indicePeriodo = periodo.selectedIndex;
    let valorPeriodo = periodo.options[indicePeriodo].value;

    let indiceTipo = tipo.selectedIndex;
    let valorTipo = tipo.options[indiceTipo].value;


    // Limpa os erros da validação anterior
    listaErros.innerHTML = "";

    nomeObra.style.border = "";
    autor.style.border = "";
    ano.style.border = "";
    periodo.style.border = "";
    tipo.style.border = "";


    // Nome da obra
    if(nomeObra.value.length < 6){

        adicionarErro("O nome da obra deve possuir no mínimo 6 caracteres.");

        nomeObra.style.border = "1px solid red";

        validado = false;
    }


    // Autor
    if(autor.value.length < 10){

        adicionarErro("O nome do autor deve possuir no mínimo 10 caracteres.");

        autor.style.border = "1px solid red";

        validado = false;
    }


    // Ano
    if(ano.value == "" || isNaN(ano.value)){

        adicionarErro("O ano da obra deve ser um número válido.");

        ano.style.border = "1px solid red";

        validado = false;
    }


    // Período
    if(valorPeriodo == ""){

        adicionarErro("Selecione um período válido.");

        periodo.style.border = "1px solid red";

        validado = false;
    }


    // Tipo
    if(valorTipo == ""){

        adicionarErro("Selecione um tipo válido.");

        tipo.style.border = "1px solid red";

        validado = false;
    }


    // Se não houver nenhum erro, registra a obra
    if(validado == true){

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


// =====================================
// ADICIONA UM ERRO NA LISTA
// =====================================

function adicionarErro(mensagem){

    let listaErros = document.getElementById("listaErros");

    let li = document.createElement("li");

    let texto = document.createTextNode(mensagem);

    li.appendChild(texto);

    listaErros.appendChild(li);

}


// =====================================
// REGISTRA UMA OBRA NA TABELA
// =====================================

function registrarObra(nome, autor, ano, periodo, tipo, detalhamento){

    let table = document.getElementById("corpoTabela");

    // Cria uma nova linha
    let tr = document.createElement("tr");


    // Nome da obra
    let td = document.createElement("td");
    let txt = document.createTextNode(nome);

    td.appendChild(txt);
    tr.appendChild(td);


    // Autor
    td = document.createElement("td");
    txt = document.createTextNode(autor);

    td.appendChild(txt);
    tr.appendChild(td);


    // Ano
    td = document.createElement("td");
    txt = document.createTextNode(ano);

    td.appendChild(txt);
    tr.appendChild(td);


    // Período
    td = document.createElement("td");
    txt = document.createTextNode(periodo);

    td.appendChild(txt);
    tr.appendChild(td);


    // Tipo
    td = document.createElement("td");
    txt = document.createTextNode(tipo);

    td.appendChild(txt);
    tr.appendChild(td);


    // Botão excluir
    td = document.createElement("td");

    let button = document.createElement("input");

    button.type = "button";
    button.value = "Excluir";
    button.onclick = excluirObra;

    td.appendChild(button);
    tr.appendChild(td);


    // Ao clicar na linha mostra o detalhamento
    tr.onclick = function(){

        document.getElementById("detalhesObra").innerHTML = detalhamento;

    };


    // Adiciona a linha na tabela
    table.appendChild(tr);

}


// =====================================
// EXCLUI UMA OBRA
// =====================================

function excluirObra(){

    let confirmar = window.confirm(
        "Deseja realmente excluir esta obra?"
    );

    if(confirmar == true){

        let td = this.parentElement;
        let tr = td.parentElement;
        let index = tr.rowIndex;
        let tBody = tr.parentElement;
        let table = tBody.parentElement;

        table.deleteRow(index);

    }

}


// =====================================
// LIMPA O FORMULÁRIO
// =====================================

function limparFormulario(){

    document.getElementById("nomeObra").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";

    document.getElementById("periodo").selectedIndex = 0;
    document.getElementById("tipo").selectedIndex = 0;

    document.getElementById("detalhamento").value = "";

}