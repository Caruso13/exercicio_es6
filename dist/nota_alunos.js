var alunos = ["Juliana", "Augusto", "Ricardo", "Jéssica", "Matheus", "Sandra", "Fernanda", "Antônio", "Carlos", "Betina"];
var notas = [7, 5, 8, 6, 9, 4, 7, 8, 5, 6];

function mostrarNotasAprovadas() {
    for (let i = 0; i < alunos.length; i++) {
        if (notas[i] >= 6) {
            console.log($(alunos[i]) .concat ($(notas[i])));
        }
    }
}


// mostrarNotasAprovadas();const alunos = ["Juliana", "Augusto", "Ricardo", "Jéssica", "Matheus", "Sandra", "Fernanda", "Antônio", "Carlos", "Betina"];
// const notas = [7, 5, 8, 6, 9, 4, 7, 8, 5, 6];

// function mostrarNotasAprovadas() {
//     for (let i = 0; i < alunos.length; i++) {
//         if (notas[i] >= 6) {
//             console.log($ (alunos[i]) .concat ($ (notas[i])));
//         }
//     }
// }

// mostrarNotasAprovadas();