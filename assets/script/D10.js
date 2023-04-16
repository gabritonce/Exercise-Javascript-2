const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]




/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
var sum;
function somma(a, b) {
  sum = a + b
}
somma(10, 20)
console.log(sum)
/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
var random;
function casuale() {
  return random = Math.floor(Math.random() * 21)
}
console.log(casuale())
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
var me = {
  name: 'Gabriel',
  surname: 'Toncelli',
  age: '28'
};
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me)
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
const skills = ['HTML', 'JavaScript', 'CSS'];
me.skills = ['HTML', 'JavaScript', 'CSS'];
console.log(me)


/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push('TyperScript')
console.log(me)
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop()
console.log(me)
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

var casual;
function dice() {
  casual = Math.floor(Math.random() * 7)
  return casual
}
console.log(dice())
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
var numero1 = 70;
var numero2 = 34;
function maggiore(numero1, numero2) {
  if (numero1 > numero2) {
    console.log('Numero1 è maggiore di Numero2')
  } else {
    console.log('Numero2 è maggiore di Numero1')
  }
}
maggiore(numero1, numero2)
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
var stringa = 'CIAO STO FACENDO L ESAME'

function splitMe() {

  return stringa2 = stringa.split(' ')
}
console.log(splitMe())


/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
var booleano = 5 > 2;
var stringaBo = 'ciao sto facendo l esame';
function deleteOne() {
  if (booleano) {
    return stringaBo.substring(1, 25)

  } else {
    return stringaBo.substring(0, 23)

  }
}
console.log(deleteOne())

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
var noNumeri = 'I have 5 redfish'


function onlyLetters() {
  noNumeriIndex = noNumeri.indexOf(5)
  noNumeriIndex2 = noNumeri.slice(0, 7)
  noNumeriIndex3 = noNumeri.slice(9);
  return (noNumeriIndex2 + noNumeriIndex3);
}
console.log(onlyLetters())
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
var email = 'tonx.info@gmail.com'; ////
function isThisAnEmail(email) {
  var regexp = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/gi;
  if (regexp.test(email) == true) {
    console.log(email + " indirizzo valido")

  } else {
    console.log(email + " indirizzo non valido")

  }
}

isThisAnEmail(email)

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
  
*/
function whatDayIsIt() {
  let data = new Date();
  let gg, mm, aaaa;
  gg = data.getDate() + "/";
  mm = data.getMonth() + 1 + "/"
  aaaa = data.getFullYear();
  return console.log(gg + mm + aaaa)

}
console.log(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const values = [];
const rollTheDices = (numberOfTimes) => {
  for (let i = 0; i < numberOfTimes; i++) {
    dice()
    values.push(dice())

  }
  const sum = values.reduce((a, b) => a + b, 0)
  console.log(sum)
  console.log(values)
  const obj = {
    sum: sum,
    values: values
  }
  return obj
}


console.log(rollTheDices(2))
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

const date1 = '12/12/1994'
const date2 = '04/01/1994'
var a = new Date(date1)
var b = new Date(date2)

function howManyDays(a, b) {
  return Math.floor((a - b) / (1000 * 60 * 60 * 24))
}
console.log(howManyDays(a, b))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
var data2 = /* '16/4' */ '26/8'

function isTodayMyBirthday() {
  var prova = new Date()
  var giorno = prova.getDate() + "/"
  var mese = prova.getMonth() + 1
  if (giorno + mese == data2) {
    console.log('è il mio compleanno')
  } else {
    console.log('oggi non è il mio compleanno')
  }
}

isTodayMyBirthday()

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const oggetto1 = {
  name: 'Giovanni',
  surname: 'Rossi',
  age: '27'
}
const stringaOggetto = 'name';

function deleteProp(obj, keyStringa) {
  delete obj[keyStringa];
  return obj
}
deleteProp(oggetto1, stringaOggetto)
console.log(deleteProp(oggetto1, stringaOggetto))
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
  
*/
const newestMovie = (array2) => {
  let res = { Year: 1900 };
  for (let i = 0; i < array2.length; i++) {
    let currentYear = parseInt(array2[i].Year);
    if (currentYear > res.Year) {
      res = array2[i];
    }
  }

  return res;
};

console.log(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = (array) => {
  return array.length;
}
console.log(countMovies(movies))
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
const onlyTheYears = (pippo) => {
  return pippo.map((element) => element.Year);
};

console.log(onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i].Year) < 2000) {
      result.push(array[i]);
    }
  }
  return result;
};
console.log(onlyInLastMillennium(movies))
  /* ESERCIZIO 16
    Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
  */
  ;
function sumAllTheYears(array) {
  let somma = 0;
  for (let i = 0; i < array.length; i++) {
    somma += parseInt(array[i].Year);
  }
  return somma;
}
console.log(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = function (array, titolo2) {

  return array.map(element => {
    if (element.Title.includes(titolo2)) {
      return element.Title
    }
  })
}
console.log(searchByTitle(movies, 'Lord'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (stringa) => {
  const match = movies.map(elem => {
    if (elem.Title.includes(stringa)) {
      return elem.Title
    }
  })
  const unmatch = movies.map(elem => {
    if (!elem.Title.includes(stringa)) {
      return elem.Title
    }
  })
  const obj = {
    match: match,
    unmatch: unmatch
  }
  return obj
}
console.log(searchAndDivide('Lord'))
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
var div;

function selezionaDiv() {
  div = document.getElementById('container');
  div.innerText = 'Sto modificando il div'
}
selezionaDiv()
/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
var tag2;
function tag() {
  tag2 = document.querySelector('td');
  tag2.innerText = 'Sto modificando il td'
}
tag()
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
var trovaTd = document.getElementsByTagName('td');
console.log(trovaTd) //
function cicloTd() {
  for (i = 0; i < trovaTd.length; i++) {
    console.log(trovaTd[i].innerHTML)
  }
}
cicloTd()

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const colore = () => {
  const aLink = document.querySelectorAll('a')
  for (let i = 0; i < aLink.length; i++) {
    aLink[i].classList.add('test');
  }
};
console.log(colore())

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const aggiungiElemento = function (elemento) {
  const lista = document.getElementById('myList');

  let aggiungi = document.createElement('li');
  aggiungi.innerText = elemento
  lista.appendChild(aggiungi)
}
aggiungiElemento('cinque')

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

/* var rimuoverelista; //
function remove (){
rimuoverelista = document.getElementById('myList');
rimuoverelista.innerText=''
}
remove() */


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
function aggiungiClaase() {
  const aggiungiTag = document.querySelector('tr');
  aggiungiTag.classList.add('test')
}
aggiungiClaase()

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */


