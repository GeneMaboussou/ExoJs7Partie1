document.getElementById("submit");submit.addEventListener('click',
function birth(){
    var birth = document.getElementById('birth').value;
    var result = (2021 - birth);
    if(result > 18)
        alert ('Vous êtes majeur');
    else{
        alerte ('Vous êtes mineur');
    }
});