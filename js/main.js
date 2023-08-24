// collego i miei p creati sull'html
const ob0 = document.getElementById("object-1");
const ob1 = document.getElementById("object-2");
const ob2 = document.getElementById("object-3");
const ob3 = document.getElementById("object-4");
const ob4 = document.getElementById("object-5");
const ob5 = document.getElementById("object-6");

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
  if (i == 0) {
    ob0.innerHTML =
      team[i].name +
      "/" +
      team[i].task +
      "/" +
      `<img scr="./img/${team[i].photo}">`;
  } else if (i == 1) {
    ob1.innerHTML =
      team[i].name +
      "/" +
      team[i].task +
      "/" +
      `<img scr="./img/${team[i].photo}">`;
  } else if (i == 2) {
    ob2.innerHTML =
      team[i].name +
      "/" +
      team[i].task +
      "/" +
      `<img scr="../img/${team[i].photo}">`;
  } else if (i == 3) {
    ob3.innerHTML =
      team[i].name +
      "/" +
      team[i].task +
      "/" +
      `<img scr="./img/${team[i].photo}">`;
  } else if (i == 4) {
    ob4.innerHTML =
      team[i].name +
      "/" +
      team[i].task +
      "/" +
      `<img scr="./img/${team[i].photo}">`;
  } else if (i == 5) {
    ob5.innerHTML =
      team[i].name +
      "/" +
      team[i].task +
      "/" +
      `<img scr="./img/${team[i].photo}">`;
  }
}
