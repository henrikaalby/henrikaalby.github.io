


const submit = document.getElementById("submit");

const brukernavn = document.getElementById("email");

const passord = document.getElementById("password");


// Loop through Array of Objects
var objPeople = [
    { // Object @ 0 index
        brukernavn: "henrik",
        passord: "henrik"
    },
    { // Object @ 1 index
        brukernavn: "matt",
        passord: "academy"
    },
    { // Object @ 2 index
        brukernavn: "chris",
        passord: "forever"
    }

]

function getInfo() {
    var brukernavn = document.getElementById('email').value;
    var passord = document.getElementById('passord').value;

    for(var i = 0; i < objPeople.length; i++) {
        // check is user input matches username and password of a current index of the objPeople array
        if(brukernavn == objPeople[i].brukernavn && passord == objPeople[i].passord) {
            console.log(brukernavn + " is logged in!!!")
            // stop the function if this is found to be true
            return
        }
    }
    console.log("incorrect username or password")
}