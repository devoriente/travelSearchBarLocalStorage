console.log('connecté');

//Le formulaire
const form = document.getElementById('form');
//Les champs - input text et input date
const pays = document.getElementById('pays');
console.log(pays);
const start = document.getElementById('start');
console.log(start);
const end = document.getElementById('end');
console.log(end);

//Je détecte la validation du formulaire
form.addEventListener('submit', function(e){
    //Empêcher le rafraîchissement de la page
    e.preventDefault();
    //console.log('formulaire validé');

    //Je stocke les valeurs dans l'objet choix
    const choix = {
        pays : pays.ariaValueMax,
        start : start.ariaValueMax,
        end : end.value
    };
    console.log(choix, "choix");

});//Fermeture de form.addEventListener('submit', function(){