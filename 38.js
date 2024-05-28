function describe_city(country, nameOfCity) {
    if (country === void 0) { country = 'pakistan'; }
    return "".concat(nameOfCity, " is in ").concat(country);
}
var city1 = describe_city("southAFrica", "cape town");
var city2 = describe_city("india", "delhi");
var city3 = describe_city("dubai", "uae");
var city4 = describe_city("pakistan", "islamabad");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
