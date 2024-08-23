const modal = document.querySelector(".add-cat-form");
const openButton = document.querySelector(".add-cat-btn");
const closeButtton = document.querySelector(".close-btn");
const moreAbtCats = document.querySelector(".more-abt-cats");
// const addCatForm = document.querySelector('.submit-btn');

const openModal = () => {
  modal.classList.remove("hidden");
};

openButton.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hidden");
};

closeButtton.addEventListener("click", closeModal);

// window.onload = () => {
//     const cats = JSON.parse(localStorage.getItem("firstCat"));

// }

// addCatForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const dataObject = Object.fromEntries(data.entries());
// 	console.log(dataObject);

//     localStorage.setItem("firstCat", JSON.stringify(dataObject));

//     addCatForm.reset();
// });

const fakeCats = [
  {
    id: "0",
    name: "Lucyfer",
    gender: "male",
    breed: "maine coon",
    dob: "10.02.2021",
  },
  {
    id: "1",
    name: "Lucyfer",
    gender: "male",
    breed: "maine coon",
    dob: "10.02.2021",
  },
  {
    id: "2",
    name: "Lucyfer",
    gender: "male",
    breed: "maine coon",
    dob: "10.02.2021",
  },
];

fakeCats.forEach((cat) => {
    //logika do wyswietlenia kota
})
