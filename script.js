/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. */

const students = [
    {
        name: 'João',
        scoreOne: 7,
        scoreTwo: 9,

    },
    {
        name: 'Clarissa',
        scoreOne: 3,
        scoreTwo: 6,
    },
    {
        name: 'Antônio',
        scoreOne: 10,
        scoreTwo: 8,
    },
    {
        name: 'Tereza',
        scoreOne: 7,
        scoreTwo: 7,
    }
];

function calculaMedia(scoreOne, scoreTwo) {
    return (scoreOne + scoreTwo) / 2;

}

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const media = calculaMedia(student.scoreOne, student.scoreTwo);

    if (media >= 7) {
        alert(`Parabéns ${student.name}! Você foi aprovado(a) com a média ${media}`);
    } else {
        alert(`Infelizmente ${student.name}, você não foi aprovado(a). Sua média foi ${media}. \nTente novamente!`);
    }
}