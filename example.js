// CLOSURES SAO FUNCOES QUE LEMBRAM DO SEU PROPRIO ESCOPO LEXICO

// ESCOPO GLOBAL
let contagem = 1;

// ESCOPO DE FUNCAO (ESCOPO LEXICO)
function contador() {
  let contagem = 7;

  function incrementaContador() {
    contagem++;
  }

  function imprimeContador() {
    console.log(contagem);
  }

  return {
    incrementaContador,
    imprimeContador,
  };
}

let teste = contador();
teste.incrementaContador(); // 8
teste.incrementaContador(); // 9
teste.incrementaContador(); // 10
teste.imprimeContador();

let teste2 = contador();
teste2.incrementaContador();
teste2.incrementaContador();
teste2.incrementaContador();
teste2.imprimeContador();
