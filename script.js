// // criar um objeto

// const estudante = {
//     nome: "Clara",
//     sobrenome: "Meirelles",
//     matricula: "964852",
//     notas: [7, 9, 10]
// }
// console.log(estudante)

// estudante.modulo = "Módulo 1"

// //\n deve ser dentro da string
// // console.log("nome:", estudante.nome, "\nsorenome:", estudante['sobrenome'], "\nsegunda nota:", estudante.notas[1], "\nMódulo:", estudante.modulo)

// //Para criar uma cópia INDEPENDENTE do primeiro, usar {...nomeDoObjeto}

// const estudante2 = {
//     ...estudante,
//     nome: "Pri",
//     modulo: "Módulo 2",
//     notas: [...estudante.notas, 9] // espelhamento do array
    
// }
// estudante.nome = "Pri"
// console.log(estudante2)

// const estudantesLabenu = []
// estudantesLabenu.push(estudante, estudante2)
// console.log(estudantesLabenu)

const carrinho = {
    nome: "Matheus",
    pagamento: "Crédito",
    endereço: "Rua Sepé, 51",
    compras: ["Produto:", "Preço", "Quantidade:"]
}
carrinho.compras = [
    produto = "arroz",
    preço = "3 reais",
    quantidade = "10kg"
]


console.log(carrinho)

const carrinhoPresente = {
    ...carrinho,
    nome: "Reilloca",
    pagamento: "Cartão presente"
}

console.log(carrinho, carrinhoPresente)