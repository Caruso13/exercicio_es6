let meuMap = new Map();
meuMap.set("nome", "angelo");
meuMap.set("nota", 9);



//console.log(meuMap);

//const nome = meuMap.get("nome");

//console.log(nome);

//console.log(meuMap.size) 

//console.log(meuMap.has("sobrenome"))

//meuMap.clear()

//console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}


for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

console.log('fim')

//meuMap.delete("stack");

//console.log(meuMap)

// [nome => angelo]
// [stack => html, css, js]

// const cpfs = new Set();

// cpfs.add('65876118001')
// cpfs.add('19206530070')
// cpfs.add('61505518067')


// console.log(cpfs)

// console.log(cpfs.keys())
// console.log(cpfs.values())


// cpfs.forEach((valor) => {
//     console.log(valor);
// })

// const array = ['jorge Armando', 'Angelo Caruso', 'Paula', 'Rafaela', 'Marcela', 'jorge Armando', 'Paula', 'Paula', 'Paula']

// const arrayComoSet = new Set([...array])


// const arraySemItensDuplicados = [...arrayComoSet]

// console.log(arrayComoSet)
// console.log(arraySemItensDuplicados)

