// Faixa de Preco
// Criar array de objetos de faixa de preco
// faixas,tooltip,minimo,maximo

// Primeira opcao (array)
let faixas = [
    {tooltip: 'ate R$700', minimo: 0, maximo: 700},
    {tooltip: 'ate R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'ate R$1000 ou mais', minimo: 1000, maximo: 99999}
];

// Segunda opcao (factory function)
function criarFaixaPreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 =[
    criarFaixaPreco('a',1,100),
    criarFaixaPreco('b',100,1000),
    criarFaixaPreco('c',1000,10000),
]

// Terceira Opcao (Constructor Function)
function FaixaPreco(tooltip,minimo,maximo){
    this.tooltip = tooltip,
    this.minimo = minimo,
    this.maximo = maximo
}
let faixas3 = [
    new FaixaPreco('d',10,20,),
    new FaixaPreco('e',20,30,),
    new FaixaPreco('f',30,40,)
];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);
