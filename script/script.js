document.getElementById("submit");submit.addEventListener('click',
function age(){
    var age = document.getElementById('age').value;
    var result = (age);
    if(result > 18)
        alert ('Vous êtes majeur');
    else{
        alerte ('Vous êtes mineur');
    }
});