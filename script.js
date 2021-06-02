const cButton = document.querySelector('#criar-tarefa');

function criarElementoLista() {
  // Recupera o texto digitado
  const caixaInput = document.getElementById('texto-tarefa');
  const textoDigitado = document.getElementById('texto-tarefa').value;
  console.log(textoDigitado);

  // Cria o item da lista, e atribui nele o texto digitado
  const listatarefas = document.getElementById('lista-tarefas');
  const itemDaLista = document.createElement('li');
  listatarefas.appendChild(itemDaLista);
  itemDaLista.innerText = textoDigitado;

  // limpa caixa de texto
  caixaInput.value = '';
}

cButton.addEventListener('click', criarElementoLista);
