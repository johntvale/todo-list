const criarTarefa = document.querySelector('#criar-tarefa');

function mudarCorFundo(adicionaRecebimentoDeClick) { // evento aciona apenas quando for CLICADO
  const clicado = adicionaRecebimentoDeClick.target;
  const arrayLista = document.querySelectorAll('li');

  for (let index = 0; index < arrayLista.length; index += 1) { // confere se alguém já foi clicado (se já tem fundo cinza)
    if (arrayLista[index].className === 'corClicado') {
      arrayLista[index].className = '';
      // console.log('perdeu a classe cinza ' + arrayLista[length]);
    }
  }
  clicado.className = 'corClicado';
}

// criar link em cada adição na lista
function adicionaRecebimentoDeClick() {
  const ultimaPosicao = document.querySelectorAll('li').length - 1;
  const ultimoItemDaLista = document.querySelectorAll('li')[ultimaPosicao];
  console.log(ultimoItemDaLista);
  ultimoItemDaLista.addEventListener('click', mudarCorFundo);
}

function criarElementoLista() { // CRIAR LIST ITEM
  // Recupera o texto digitado
  const caixaInput = document.getElementById('texto-tarefa');
  const textoDigitado = document.getElementById('texto-tarefa').value;

  // Cria o item da lista, e atribui nele o texto digitado
  const listatarefas = document.getElementById('lista-tarefas');
  const itemDaLista = document.createElement('li');
  listatarefas.appendChild(itemDaLista);
  itemDaLista.innerText = textoDigitado;

  // limpa caixa de texto
  caixaInput.value = '';

  adicionaRecebimentoDeClick(); // ADICIONA RECEBIMENTO DE CLICK AO ULTIMO ITEM DA LISTA
}

criarTarefa.addEventListener('click', criarElementoLista); // botão TAREFA >> CRIAR List Item
