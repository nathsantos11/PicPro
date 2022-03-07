//1 Adicionar IDs nos botoes 1 a 4
//2 Selecionar os botoes
//3 Interceptar o evento de clique
//4 Recuperar o ID adicionado



//selecionando UL(LISTA)
const ListaOpcoes = document.querySelector(".secaoDetalhesConta__opcoesTransacoes")

//Adicionand escutador de eventos
ListaOpcoes.addEventListener("click", identificarOpcoes)

//Executando ação depois do clique
function identificarOpcoes (event) {
    
    //Identificando onde ocorreu o clique
    const elemento  = event.target

    //Validando se é um LI
    if(elemento.tagName == "LI") {

        //Recuperando o ID e armazenando em uma variável
        const id = elemento.id

        //Selecionando uma seção utilizando o ID (escolha do usuário)
        const secaoEscolha = document.querySelector(`div[data-id="${id}"]`)

        //Removendo classe mostrar
        removeClasseMostrar()

        //Adicionar uma classe
        secaoEscolha.classList.add("mostrar")
    }
}

//Função para remover as classes das divs
function removeClasseMostrar(){
    const divs = document.querySelectorAll(".secaoTransacao .container div")
    
    for(let i = 0; i < divs.length; i++){

        divs[i].classList.remove("mostrar")

    }
}