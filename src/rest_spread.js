
//rest
function somar() {
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // console.log(arguments)
    // //return a + b;
}

console.log(somar(10,20,30))

function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30))


// spread
const numeros = [1,2,3,4]
console.log(...numeros)

const marcasDeCarros = ['fiat', 'bmw', 'renault','volks'];
const marcasDeMotos = ['honda', 'yamaha','royal-enfield','suzuki'];

const marcasVeiculos = [...marcasDeCarros, ...marcasDeMotos];



console.log(marcasVeiculos)


const carroDaJulia = {
    modelo: 'gol',
    marca: 'Volks',
    motor: 1.6

}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8

}

console.log(carroDaAna);

// desestruturação
//const motorDoCarroDaAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia)


const [item1, item2, item3, ...outrasMarcas] = marcasVeiculos;

console.log(item1);
console.log(item2);
console.log(item3);
console.log(outrasMarcas);


