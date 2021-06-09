const criarTarefa = document.querySelector('#criar-tarefa');

criarTarefa.addEventListener('click', criarElementoLista); // botão ADICIONAR CRIA List Item

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

// criar link em cada adição na lista
function adicionarRecebimentoDeClick() {
  const ultimaPosicao = document.querySelectorAll('li').length - 1;
  const ultimoItemDaLista = document.querySelectorAll('li')[ultimaPosicao];
  ultimoItemDaLista.addEventListener('click', mudarCorFundo);
}

function mudarCorFundo(adicionarRecebimentoDeClick) { // evento aciona apenas quando for CLICADO
  const clicado = adicionarRecebimentoDeClick.target;
  const arrayLista = document.querySelectorAll('li');

  for (let index = 0; index < arrayLista.length; index += 1) { // confere se alguém já foi clicado (se já tem fundo cinza)
    if (arrayLista[index].className === 'corClicado') {
      arrayLista[index].classList.remove('corClicado');
    }
  }
  clicado.classList.add('corClicado');
}

function adicionarRecebimentoDeDoubleClick() { // adiciona função de double click em todos os novos itens de lista
  const ultimaPosicao2 = document.querySelectorAll('li').length - 1;
  const ultimoItemDaLista2 = document.querySelectorAll('li')[ultimaPosicao2];
  ultimoItemDaLista2.addEventListener('dblclick', adicionarConcluidoDoubleClick);
}

// adiciona "corte no texto" caso receba 2 clicks, retirar caso receba 2 clicks novamente
function adicionarConcluidoDoubleClick(adicionarRecebimentoDeDoubleClick) {
  const clicado2x = adicionarRecebimentoDeDoubleClick.target;
  if (clicado2x.className === '') {
    clicado2x.classList.add('completed');
    console.log('1');
  } else if (clicado2x.className === 'completed') {
    clicado2x.classList.remove('completed');
    console.log('3');
  }
  if (clicado2x.className === 'corClicado') {
    clicado2x.classList.add('completed');
    console.log('2');
  } else if (clicado2x.className === 'corClicado completed') {
    clicado2x.classList.remove('completed');
    console.log('4');
  }
}
