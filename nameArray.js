//Create Array
var classmates = [
    "Ryan",
    "Joshua",
    "Chris", 
    "Jalani",
    "Bhishma",
    "Daniel",
    "Sebstian",
    "Aylin",
    "Beth",
    "Lisa",
    "Rick",
    "Matthew",
    "Tim",
    "Jennifer",
    "Delani",
    "Stephen",
    "Thor",
    "Babyface Monkeyman of the Dark World the III"
];


//Name Array Implementation Function
function nameArray(names) {
    var compliment = "";
    var person;

    names.forEach(function (m) {
        person = m;
        compliment = `Great coding work, ${person}!` + "\n";

        console.log(compliment);
    });
    compliment = "";
    
    return names;

}


nameArray(classmates);