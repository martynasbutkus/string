// 1 Uzduotis
var input = prompt("Iveskite savo varda")
var wrong = false
while(!wrong){
    var number = prompt("Iveskite skaiciu")
    if( isNaN(number)|| number % 1 != 0){
        alert("Skaicius turi buti Sveikasis skaicius!")
    }else{
        wrong = true
    }
}

var num = parseFloat(number)
for(var i = 0; i <= num; i++){
    var repeat = document.createElement("h1")
    repeat.innerText = `${input}`
    document.body.append(repeat)
}

//2 Uzduotis
var text = prompt("Iveskite Varda")
var trim = text.trim()
var count = trim.length
alert(count) 

//3 Uzduotis
var fname = prompt("Iveskite varda ir pavarde");

var fullName = fname.split(" ");
var names = fullName[0];
var surnames = fullName.slice(1).join(" ");

var h1name = document.createElement("h1");
h1name.innerText = `Vardas: ${names}`;
document.body.append(h1name);

var h1surname = document.createElement("h1");
h1surname.innerText = `Pavarde: ${surnames}`;
document.body.append(h1surname);