function calcularMedia() {
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);
  const nota4 = parseFloat(document.getElementById("nota4").value);

  // Calcula a média das notas
  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  let mensagem = "";

  // Verifica a média e define a mensagem certa
  if (media === 0) {
    mensagem = "Infelizmente você zerou a prova :(";
  } else if (media > 0 && media <= 3) {
    mensagem = `Caramba, deu ruim, você obteve média ${media.toFixed(1)}! Estude mais e tente novamente!`;
  } else if (media > 3 && media <= 5.9) {
    mensagem = `Você obteve média ${media.toFixed(1)}! Falta pouco para a média.`;
  } else if (media >= 6 && media <= 7) {
    mensagem = `Você está na média com ${media.toFixed(1)}.`;
  } else if (media > 7 && media < 10) {
    mensagem = `Notão! Sua média é ${media.toFixed(1)}!`;
  } else if (media === 10) {
    mensagem = "Hoje é seu aniversário? Pq você tá de parabéns! 10 de média.";
  }

  document.getElementById("situacaoAluno").innerHTML = mensagem;
}






// EXPLICACOES ADICIONAIS
/* 
Árvore DOM (Document Object Model), que é a representação hierárquica de todos os elementos de uma página HTML


Document
└── html
    ├── head
    │   └── title
    │       └── "Exemplo DOM"
    └── body
        └── input (type="number", id="nota1")


- `document` - representa a raiz da árvore DOM (o nó principal que contém todo o documento HTML)
- `getElementById("nota1")` - percorre a árvore DOM para encontrar o nó que corresponde ao elemento com id="nota1"
- `.value` - acessa o valor contido no nó <input> da árvore DOM
- `parseFloat` - converte o valor extraído (que originalmente é uma string) em um número

o uso do id "nota1" serve para identificar de forma única o elemento HTML que será manipulado pelo código JavaScript. Isso significa que o id="nota1" se refere exclusivamente 
a um elemento específico. Isso facilita para o JavaScript encontrar e interagir com esse elemento de forma direta, sem ambiguidade.

- usar um id descritivo como "nota1" torna o código mais legível e compreensível, alem de obedecer o semantismo.

relação prática com a Árvore DOM permite que o JS:
- leia os atributos e conteúdos dos nós (como value, id, class)
- modifique elementos do documento, como mudar valores ou alterar estilos
- adicione ou remova nós dinamicamente


MANIPULADOR DE EVENTOS 
onclick é um atributo HTML que define o que deve acontecer quando o usuário clica no elemento (como um botão ou um link)
** ele é um evento que dispara a execução de uma ação ou função definida em JavaScript, no caso calcularMedia() **

essa função deve estar definida no código JavaScript associado à página


*/ 