/*
Ciao Ragazzi,
Esercizio di oggi:
cartella/repo js-es6-icons
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2
Coloriamo le icone per tipo
Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
:avviso:IMPORTANTE: non è obbligatorio usare la sintassi ES6, se non vi sentite a vostro agio partite dalla sintassi con cui vi trovate meglio e cercate di migliorarla in un secondo momento.
BONUS: Provare ad aggiungere una casella di testo che renda possibile filtrare anche per nome dell'icona
SUPER INCREDIBLE MEGA BONUS: effettuare la ricerca dalla casella di testo in "tempo reale", cioè man mano che l'utente digita.
s */

/*
const icons = [
  {
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
  },

  <section class="container">
    <div class="row g-3 ">
      <div class="col-2 offset-1 ">
        <div class="card ">
          <div class="card-body">
            <i class="fas fa-cat fa-6x"></i>
            <h3>cat</h3>
          </div>
        </div>
      </div>
    </div>
  </section>;
  */

// console.log(icons);
let iconsTemplate = "";
icons.forEach((element, index, arr) => {
  iconsTemplate += `
  <div class="col-2 ">
    <div class="card ">
      <div class="card-body">
        <i class="${element.family} ${element.prefix}${element.name} ${element.prefix}6x"></i>
        <h3>${element.name.toUpperCase()}</h3>
      </div>
    </div>
   </div>
   `;
});

console.log(iconsTemplate);
const cardsSection = document.querySelector("#section-card");
cardsSection.innerHTML = iconsTemplate;
