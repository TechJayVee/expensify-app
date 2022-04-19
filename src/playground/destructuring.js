// const person = {
//     name: 'Jayvee',
//     age: 24,
//     location:{
//         city: 'Philippines',
//         temperature: "35"
//     }

// }
// const {name, age, location}=person;
// const {city, temperature}=person.location;

// console.log(`${name} is ${age} he lives in ${city}`);

// const book = {
//     title: 'the Bible',
//     author: 'Diciple of God',
//     publisher:{
//         name: 'Jayvee'
       
//     }

// }
// const {name: PublisherName = 'self-Published'} = book.publisher;

// console.log(PublisherName)

const item =['Coffee (hot)', '2.00', '2.50', '2.75'];
const [itemNAme, ,medium]=item;
console.log(`the price of the ${itemNAme} medium is ${medium}`)