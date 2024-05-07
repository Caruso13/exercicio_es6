"use strict";

var alunos = [{
    nome: 'José',
    nota: 8
}, {
    nome: 'Maria',
    nota: 5
}, {
    nome: 'Arthur',
    nota: 9
}, {
    nome: 'Carla',
    nota: 4
}, {
    nome: 'Sarah',
    nota: 6
}];
function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
    });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log('Alunos aprovados:', alunosAprovadosArray);
