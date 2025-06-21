// const coding = ["js", "ruby", "java", "python", "cpp"]

/* const values = coding.forEach( (item) => ) { 
    // console.log(item);
    return item
} )

console.log(values); */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* const newNums = myNums.filter( (num) =>  { 
    return num > 4 
} )
console.log(newNums); */

/* const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push()

    }
} ) 

console.log(newNums); */

const books = [
    { title: 'Book one', genre: 'Fiction', publish: 1981,
    edition: 2004 },
    { title: 'Book two', genre: 'Non-fiction', publish: 1992,
    edition: 2008 },
    { title: 'Book three', genre: 'history', publish: 1999,
    edition: 2007 },
    { title: 'Book four', genre: ' Non-Fiction', publish: 1989,
    edition: 2010 },
];

let userBooks = books.filter( (bk) => bk.genre === 'history')

userBooks = books.filter( (bk) => {
     return bk.publish >= 1995 && bk.genre === "history"})
console.log(userBooks);