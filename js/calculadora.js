function somar() {
  const numero1 = parseFloat(document.getElementById("numero1Soma").value);
  const numero2 = parseFloat(document.getElementById("numero2Soma").value);
  

  const resultado = numero1 + numero2;

  /* Mostra o resultado da operação */
  document.getElementById("resultadoSoma").innerHTML = resultado;
}

function subtrair() {
  const numero1 = parseFloat(document.getElementById("numero1Sub").value);
  const numero2 = parseFloat(document.getElementById("numero2Sub").value);
  // evite mexer no código acima!

  const resultado = numero1 - numero2;

  /* Mostra o resultado da operação */
  document.getElementById("resultadoSub").innerHTML = resultado;
}

function multiplicar() {
  const numero1 = parseFloat(document.getElementById("numero1Mult").value);
  const numero2 = parseFloat(document.getElementById("numero2Mult").value);
  

  const resultado = numero1 * numero2;

  /* Mostra o resultado da operação */
  document.getElementById("resultadoMult").innerHTML = resultado;
}

function dividir() {
  const numero1 = parseFloat(document.getElementById("numero1Div").value);
  const numero2 = parseFloat(document.getElementById("numero2Div").value);
  

  if (numero2 !== 0) {
    const resultado = numero1 / numero2;
    document.getElementById("resultadoDiv").innerHTML = resultado;
  } else {
    document.getElementById("resultadoDiv").innerHTML = "Erro: Divisão por zero!";
  }
}