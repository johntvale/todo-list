const criarTarefa = document.querySelector('#criar-tarefa');
const apagarLista = document.querySelector('#apaga-tudo');
const limparCompletos = document.querySelector('#remover-finalizados');

function mudarCorFundo(handleOneClick) { // evento aciona apenas quando for CLICADO
  const clicado = handleOneClick.target;
  const arrayLista = document.querySelectorAll('li');

  for (let index = 0; index < arrayLista.length; index += 1) { // confere se alguém já foi clicado (se já tem fundo cinza)
    if (arrayLista[index].className === 'corClicado') {
      arrayLista[index].classList.remove('corClicado');
    }
  }
  clicado.classList.add('corClicado');
}

// criar link em cada adição na lista
function adicionarRecebimentoDeClick() {
  const ultimaPosicao = document.querySelectorAll('li').length - 1;
  const ultimoItemDaLista = document.querySelectorAll('li')[ultimaPosicao];
  ultimoItemDaLista.addEventListener('click', mudarCorFundo);
}

// adiciona "corte no texto" caso receba 2 clicks, retirar caso receba 2 clicks novamente
function adicionarConcluidoDoubleClick(handleDoubleClick) {
  const clicado2x = handleDoubleClick.target;
  if (clicado2x.className === 'corClicado') {
    clicado2x.classList.add('completed');
  } else if (clicado2x.className === 'corClicado completed') {
    clicado2x.classList.remove('completed');
  }
}

function adicionarRecebimentoDeDoubleClick() { // adiciona função de double click em todos os novos itens de lista
  const ultimaPosicao2 = document.querySelectorAll('li').length - 1;
  const ultimoItemDaLista2 = document.querySelectorAll('li')[ultimaPosicao2];
  ultimoItemDaLista2.addEventListener('dblclick', adicionarConcluidoDoubleClick);
}

function criarElementoLista() { // CRIAR LIST ITEM
  const caixaInput = document.getElementById('texto-tarefa'); // caixa input
  const textoDigitado = document.getElementById('texto-tarefa').value; // Recupera o texto digitado

  // Cria o item da lista, e atribui nele o texto digitado
  const listaTarefas = document.getElementById('lista-tarefas');
  const itemDaLista = document.createElement('li');
  listaTarefas.appendChild(itemDaLista);
  itemDaLista.innerText = textoDigitado;

  caixaInput.value = ''; // limpa caixa de texto

  adicionarRecebimentoDeClick(); // ADICIONA class CORCLICADO, com 1 click

  adicionarRecebimentoDeDoubleClick(); // ADICIONA class COMPLETE, com 2 click
}

// remove todos as LI da lista OL
function apagarTodosItensLista() {
  const itensLista = document.querySelectorAll('li');
  for (let index2 = 0; index2 < itensLista.length; index2 += 1) {
    itensLista[index2].remove();
  }
}

function apagarItensFinalizados() {
  const itensLista = document.querySelectorAll('li');
  for (let index3 = 0; index3 < itensLista.length; index3 += 1) {
    if (
      (itensLista[index3].className === 'completed')
      || (itensLista[index3].className === 'corClicado completed')) {
      itensLista[index3].remove();
    }
  }
}

criarTarefa.addEventListener('click', criarElementoLista); // botão ADICIONAR cria LI

apagarLista.addEventListener('click', apagarTodosItensLista); // botão LIMPAR LISTA remove todas as LI

limparCompletos.addEventListener('click', apagarItensFinalizados); // botão LIMPAR LISTA remove todas as LI
