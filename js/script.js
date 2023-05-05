// console.log("Olá Mundo!")

// var nr1 = "10";
// var nr2 = "5";

// console.log(nr1);
// console.log(nr2);

// console.log("RESULTADO: " + (nr1 + nr2));
// // console.log("RESULTADO SOMA: " + (parseInt(nr1) + parseInt(nr2)));
// console.log(`RESULTADO SOMA : ${parseInt(nr1) + parseInt(nr2)}`);
// console.log(`RESULTADO SUBTRAÇÃO : ${parseInt(nr1) - parseInt(nr2)}`);
// console.log(`RESULTADO MULTIPLICAÇÃO : ${parseInt(nr1) * parseInt(nr2)}`);
// console.log(`RESULTADO DIVISÃO : ${parseInt(nr1) / parseInt(nr2)}`);
// console.log(`RESTO DIVISÃO : ${parseInt(nr1) % parseInt(nr2)}`);

// -----------------------------------------------------------------------------------------------

// var nr1 = "10";
// var nr2 = "5";
// var resutado;

// resutado = !(parseInt(nr1)%parseInt(nr2)) ? "PAR" : "IMPAR";
// console.log(`O NÚMERO É : ${resutado}`);

// DIFERENÇA VAR/LET/CONST
// var nome1 = "Beatriz";
// let nome2 = "Matheus";

// REGRAS
// 1ª Regra --> Inicializar na declaração
// const nome3 = "Violante";
// 2ª Regra --> Não pode ser alterado durante o fluxo do programa.
// nome3 = "Jonathan";

// let nome = "Beatriz";

// if (nome != "") {
//     let nome = "Robson" 
// }

// console.log(nome);

// ARRAY
let frutas = ["Banana", "Maça", "Morango", "Carambola", "Acereola", "Laranja"];
// IMPRIMIR
console.log(frutas);
console.table(frutas);
console.log(frutas[4]);

// Adicionar um item ao final do array com o método push();
frutas.push("Melão");
console.log(frutas);
// Adicionar um item no início do array com o método unshift();
frutas.unshift("Cajú");
console.log(frutas);
// Remover um item do final do array com o método unshift();
frutas.push("Cajú");
console.log(frutas);
// Remover um item do final do array com o método pop();
frutas.pop();
console.log(frutas);
// Remover um item no início do array com o método shift();
frutas.shift();
console.log(frutas);

//Para localizar um itém dentro do array, utilizamos o método indexOf(itenNome);
// let indice = frutas.indexOf("morango");
// console.log(frutas[indice]);

//Para localizar um itém dentro do array, e apagar ele apagar ele utilizamos o método splice(indice do item, quantidade de vezes que o indice será removido).
//Obs: utilize o método indexOf(itenNome) para obter o indice do iten;
let indice = frutas.indexOf("carambola");
console.log("FRUTA Q ESTAVA NO INDICE ANTES DA REMOÇÃO : " + frutas[indice]);
frutas.splice(indice,2);
console.log("FRUTA Q FICOU NO INDICE PÓS REMOÇÃO : " + frutas[indice]);

frutas.forEach( (fruta)=>{
    console.log("Olha ele: " + fruta)
} );