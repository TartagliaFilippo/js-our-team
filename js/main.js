// collego i miei p creati sull'html
const myContainer = document.getElementById("my-container");

// creo un array di oggetti
const team = [
  {
    name: "Wayne Barnett",
    task: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    task: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    task: "Office Manager",
    photo: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    task: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    task: "Developer",
    photo: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos",
    task: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg",
  },
];

console.table(team);

// creo un ciclo for che analizzi gli elementi all'interno del mio array
for (const value of team) {
  console.log(value);
}

// stampo le inforazioni dei miei oggetti
for (let i = 0; i < team.length; i++) {
  // creo dinamicamete il mio contenitore di oggetti
  myContainer.innerHTML += `<div class="card col-3 my-4 mx-5">
      <img src="./img/${team[i].photo}" class="card-img-top">
      <div class="card-body">
        <p class="card-text">Nome Operatore: ${team[i].name}</p>
        <p class="card-text">Mansione: ${team[i].task}</p>
      </div>
  </div>`;
}
