function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var album1 = make_album("ali", "andheri raat");
var album2 = make_album("ahmed", "kadakti bijli");
var album3 = make_album("asif", "sixer");
console.log(album1);
console.log(album2);
console.log(album3);
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = make_album2("ali", "roshan din", 20);
var album5 = make_album2("ahmed", "garajtay badal", 45);
var album6 = make_album2("babar", "cover drive", 56);
console.log(album4);
console.log(album5);
console.log(album6);
