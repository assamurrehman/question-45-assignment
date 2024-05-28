function describe_city( country:string='pakistan', nameOfCity:string){
    return `${nameOfCity} is in ${country}`;

}
let city1 = describe_city("southAFrica","cape town")  ;
let city2 = describe_city("india","delhi");
let city3=describe_city("dubai","uae");
let city4=describe_city("pakistan","islamabad");

console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);