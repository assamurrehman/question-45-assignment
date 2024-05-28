interface item {
    name:string
    price:number
}
//create2 objects
const book:item={
    name:'essential typescript',
    price:400
}
const apple:item={
    name:'A quality apple',
    price:100
}
console.log(`book name:${book.name}, price:$${book.price}`)
console.log(`apple:${apple.name}, price:$${apple.price}`)