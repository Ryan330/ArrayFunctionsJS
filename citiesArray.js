//Set Cities
var cityList = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];


//Filter Cities
function filterCities(cities, key1, key2) {
    var newArray = [];

    cities.forEach(function (i) {
        if (i[key2] < 70) {
            newArray.push(i[key1]);
        }
    });
    console.log(newArray);
    return cities;
    
}


filterCities(cityList, "name", "temperature")