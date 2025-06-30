let books = [
    {
        title: "Гаррі Поттер і філософський камінь",
        pages: 320,
        authors: ["Джоан Роулінг"],
        genres: ["фентезі", "пригоди"]
    },
    {
        title: "1984",
        pages: 328,
        authors: ["Джордж Орвелл"],
        genres: ["антиутопія", "драма", "політична фантастика"]
    },
    {
        title: "Тіні забутих предків",
        pages: 180,
        authors: ["Михайло Коцюбинський", "qwerty"],
        genres: ["драма", "історичний роман"]
    },
    {
        title: "Майстер і Маргарита",
        pages: 384,
        authors: ["Михайло Булгаков"],
        genres: ["містика", "фентезі", "сатиричний роман"]
    },
    {
        title: "Аліса в Країні чудес",
        pages: 200,
        authors: ["Льюїс Керролл"],
        genres: ["фентезі", "дитяча література", "пригоди", ]
    }
];
let maxPages = books[0]
for (const book of books) {
    if (book.pages > maxPages.pages) {
        maxPages = book;
    }
}
console.log(maxPages)
//--------------------------
let maxGenresCount = 0;
for (let book of books) {
    if (book.genres.length > maxGenresCount) {
        maxGenresCount = book.genres.length;
    }
}
let booksWithMostGenres = books.filter(book => book.genres.length === maxGenresCount);
console.log(booksWithMostGenres);
//--------------------------------------
let maxTitleLength = 0;
for (let book of books) {
    if (book.title.length > maxTitleLength){
        maxTitleLength = book.title.length;
    }
}
let booksWithLongestTitle = books.filter(book => book.title.length === maxTitleLength);
console.log(booksWithLongestTitle)
//----------------------------------------
let booksWithTwoAuthors = books.filter(book => book.authors.length === 2);
console.log(booksWithTwoAuthors)
//---------------------------------------
let booksWithOneAuthor = books.filter(book => book.authors.length === 1);
console.log(booksWithOneAuthor)


//=====================================================================//


let arr = []
for (let i = 0, count = 0; count < 50; i++) {
    if (i % 2 === 0) {
        arr.push(i);
        count++;
    }
}
console.log(arr)

//-------------------------------------------------------//

let arr2 = []
for (let i = 1, count = 0; count < 50; i += 2) {
    arr2.push(i);
    count++;
}
console.log(arr2)

//----------------------------------------------------//
let randomArr = [];

for (let i = 0; i < 20; i++) {
    let randomNum = Math.floor(Math.random() * 101); // від 0 до 100 включно
    randomArr.push(randomNum);
}

console.log(randomArr);
//----------------------------------------------------//
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomArray = [];
for (let i = 0; i < 20; i++) {
    randomArray.push(getRandomInt(8, 732));
}

console.log(randomArray);
//----------------------------------------------------------//
for (let i = 2; i < randomArray.length; i += 3) {
    console.log(randomArray[i]);
}
//-----------------------------------------------------------//
for (let i = 2; i < randomArray.length; i += 3) {
    if (randomArray[i] % 2 === 0) {
        console.log(randomArray[i]);
    }
}
//---------------------------------------------------//
let thirdEvenElements = [];
for (let i = 2; i < randomArray.length; i += 3) {
    if (randomArray[i] % 2 === 0) {
        console.log(randomArray[i]);
        thirdEvenElements.push(randomArray[i]);
    }
}
console.log(thirdEvenElements);

//------------------------------------------------------//
let exampleArray = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let i = 0; i < exampleArray.length - 1; i++) {
    if (exampleArray[i + 1] % 2 === 0) {
        console.log(exampleArray[i]);
    }
}
//--------------------------------------------------------//
let anotherarr = [100,250,50,168,120,345,188]
let sum = 0;
for (let price of anotherarr) {
    sum += price;
}
let average = sum / anotherarr.length;
console.log(average);
//------------------------------------------------------//
let someArray = [2, 4, 6, 8, 10];
let multipliedArray = [];

for (let value of someArray) {
    multipliedArray.push(value * 5);
}
console.log(multipliedArray)
//--------------------------------------------------------//
let mixedArray = [1, "hello", true, 3, "world", 5, false, "test", 10];
let numbersArray = [];

for (let item of mixedArray) {
    if (typeof item === "number") {
        numbersArray.push(item);
    }
}

console.log(numbersArray);
//----------------------------------------------------//
let usersWithId = [

    {id: 1, name:`vasya`, age: 31, status: false},

{id: 2, name: `petya`, age: 30, status: true},

{id: 3, name: `kolya`, age: 29, status: true},

{id: 4, name: `olya`, age: 28, status: false}

];



let citiesWithId = [

    {user_id: 3, country: `USA`, city: `Portland`},

{user_id: 1, country: `Ukraine`, city: `Ternopil`},

{user_id: 2, country: `Poland`, city: `Krakow`},

{user_id: 4, country: `USA`, city:`Miami`}

];
let usersWithCities = usersWithId.map(user => {
    let address = citiesWithId.find(city => city.user_id === user.id);
    return {...user, address};
});

console.log(usersWithCities);
//---------------------------------------------------//
let numbers = [10, 15, 22, 33, 40, 55, 60, 71, 80, 99];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 ===0 ){
        console.log(number)
    }

}
//---------------------------------------------------//
let sourceArray = [10, 15, 22, 33, 40, 55, 60, 71, 80, 99];
let targetArray = [];

for (let i = 0; i < sourceArray.length; i++) {
    targetArray.push(sourceArray[i]);
}

console.log(targetArray);
//--------------------------------------------------------//
let letters = ['a', 'b', 'c'];
let word = '';

for (let i = 0; i < letters.length; i++) {
    word += letters[i];
}

console.log(word);
//----------------------------------------------//
let letters2 = ['a', 'b', 'c'];
let word2 = '';
let i = 0;

while (i < letters2.length) {
    word2 += letters2[i];
    i++;
}

console.log(word2);
//--------------------------------------------------------//
let letters3 = ['a', 'b', 'c'];
let word3 = '';

for (let letter of letters3) {
    word3 += letter;
}

console.log(word3);



