
// -----------  Studiyng Javascript  ------------

console.log('Studiyng Javascript.');

const firstName = 'Karoline'; //Não alterável
let lastName = 'Diniz Pequeno'; //Alterável

let actuallyYear = 2023;
let age = (actuallyYear - 2003);

console.log(firstName);
console.log(lastName);
console.log(age);

//ASI = Adiciona ';' automaticamente ao final dos comandos.

// -------------     var types    ------------
//Primitivo: string, number, boolean, undefined, null
//Referencia: objects (características/comportamentos), array (), functions ()

 console.log(typeof age) //Identificar tipo de uma var

// Creating object
let person = {
    firstName: 'Karoline',
    lastName: 'Diniz Pequeno',
    age: (actuallyYear - 2003)
}

person.lastName = 'Diniz Ramos Pequeno';
console.log(person)

// Creating array
let friends = ['Sarah', 'Eduarda', 'Gabriel', 'John', 'Danilo', 'Hicaro', 'Anderson', 'Ellen']
console.log(friends)

// Creating Functions 
function showName(firstName, lastName){
    console.log('Name: ' + firstName + ' ' + lastName)
}

showName(firstName, lastName);

// ------------  Operadores aritmeticos (+, -, *, /, %, **) ----------
let soma = 1 + 1
let sub = 1 - 1
let mult = 1 * 1
let divisao = 1/1

// -----------  atribuição Operators (++, --, +=, -=, *=, /=)  -----------
let num = 1;
num += 20;

// -----------  Comparação Operators (>,<, >=, <=, !==)  -----------
console.log(1 > 1) 
console.log(1 < 1) 
console.log(1 >= 1) 
console.log(1 <= 1) 
console.log(1 !== 1) 

// -----------  Igualdade Operators (===, ==)  -----------

//verifica se é igual e do mesmo tipo
console.log(1 === '1') 

//verifica apenas se são iguais
console.log(1 == '1') 

// ------------  Operador Ternário (? :) ----------
let driver = 90;
let speed = driver > 110 ? 'Above' : 'Bellow'; 
console.log(speed);

// ------------  Logic Operators (AND &&, NOT ||, OR !) ----------

let ageMin = true;
let titleEleitor = false;
let canVote = ageMin && titleEleitor;
console.log(canVote)

// ------------  Precedência -------------
// 

// --------------  Condições  -------------

// IF/ELSE
let driverSpeed = 450;

if(driverSpeed > 110){
    console.log('Driving too fast');
}
else if(driverSpeed > 40 && driverSpeed <= 110){
    console.log('OK');
}
else 
    console.log('Driving too slow.');

// SWICTH/CASE
let airport = 'MCO'

switch(airport){
    case 'MCO':
        console.log('Orlando');
        break;
    case 'JFK':
        console.log('John F. Kennedy');
        break;
    case 'SEA':
        console.log('Seattle');
        break;
    default:
        console.log('Unknown');
}

// -------------  Estrutura de repetição --------

// loop (for)
for (i = 1; i <= 10; i++){
    console.log('Number: ', i);
}

// loop (while)
j = 1;
while(j <= 10){
    console.log('Number: ', j);
    j++;
}

//loop (do while)
k = 1;
do{
    console.log('Number: ', k);
    k++;
} while (k <= 10)

//(for of) loop
for (let i of friends)
    console.log(i)

// ----------  Object Oriented Programming -----------

// object
const book = {
    bookTitle: 'Atomic habits',
    bookAuthor: 'James Clear',
    bookPages: 306,

    printBook: function(){
        console.log('printing...')
    }
}
book.printBook;
console.log(book);

// factory
function createBook (title, author, pages){
    const book = {
        bookTitle: title,
        bookAuthor: author,
        bookPages: pages,
    
        printBook: function(){
            console.log('printing...')
        }
    }
    return book
}

const book01 = createBook('atomic', 'james', 306);
book01.color = 'black';
console.log(book01);

// Constructor
function CreateBook (title, author, pages){
        this.bookTitle = title;
        this.bookAutho = author;
        this.bookPages = pages
}

// Built in - Objetos previament construidos
console.log(Math.max(1,3,15,2,7,4));
console.log(Math.min(-20,3,15,2,7,4));
console.log(Math.max(Math.PI));

let message = 'Hey, how are you?';
console.log(message.startsWith('Hey'));//Começa com?
console.log(message.length); 
console.log(message.includes('are')); //Inclui isso?

