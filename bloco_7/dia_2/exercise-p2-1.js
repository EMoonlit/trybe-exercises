const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

/*Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/

const addNewKey = (object, key, value) => {
    object[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

console.log(lesson2);

/*Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listKeys = (object) => Object.keys(object);

console.log(listKeys(lesson2));

/*Crie uma função para mostrar o tamanho de um objeto.*/

const sizeObject = (object) => Object.keys(object).length;

console.log(sizeObject(lesson3));
console.log(sizeObject(lesson2));
console.log(sizeObject(lesson1));

/*Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listValues = (object) => Object.values(object);

console.log(listValues(lesson3));
console.log(listValues(lesson2));
console.log(listValues(lesson1));

/*Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:*/

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.table(allLessons);

/*Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/

const getNumberOfStudents = (object) => {
    let total = 0;
    const array = Object.keys(object);
    for (let index in array) {
        total += object[array[index]].numeroEstudantes;
    }
    return total;
}
console.log(getNumberOfStudents(allLessons));

/*Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:*/

const getValueNumber = (object, number) => Object.values(object)[number];

console.log(getValueNumber(lesson1, 0));
console.log(getValueNumber(lesson2, 0));
console.log(getValueNumber(lesson3, 0));

/*Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:*/

const checkThePair = (object, key, value) => {
    const array = Object.entries(object);
    let isResult = false;
    for (let index in array) {
        if (array[index][0] === key && array[index][1] === value) isResult = true;
    }
    return isResult;
};

console.log(checkThePair(lesson2, 'professor', 'Carlos'));