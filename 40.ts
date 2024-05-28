function make_album(artistName:string, albumTitle:string){
    return{artistName,albumTitle}
}
let album1= make_album("ali","andheri raat");
let album2= make_album("ahmed","kadakti bijli")
let album3= make_album("asif","sixer")

console.log(album1)
console.log(album2)
console.log(album3)

function make_album2(artistName:string, albumTitle:string, numberOfTracks?:number){
    return{artistName,albumTitle,numberOfTracks}
}
let album4= make_album2("ali","roshan din",20);
let album5= make_album2("ahmed","garajtay badal",45)
let album6= make_album2("babar","cover drive",56)

console.log(album4)
console.log(album5)
console.log(album6)