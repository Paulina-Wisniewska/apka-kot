const modal = document.querySelector(".add-cat-form");
const openButton = document.querySelector(".add-cat-btn");
const closeButtton = document.querySelector(".close-btn");
const moreAbtCats = document.querySelector(".more-abt-cats");
const swipeRight = document.querySelector(".swipe-right");

const openModal = () => {
  modal.classList.remove("hidden");
};

openButton.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hidden");
};

closeButtton.addEventListener("click", closeModal);

const fakeCats = [
  {
    id: "0",
    name: "Lucyfer",
    gender: "male",
    breed: "maine coon",
    dob: "10.02.2021",
    imgPath: "images/Lucyfer.jpg",
  },
  {
    id: "1",
    name: "Momo",
    gender: "Female",
    breed: "British longhair",
    dob: "19.02.2024",
    imgPath: "images/Momo.png",
  },
  {
    id: "2",
    name: "Emma",
    gender: "Female",
    breed: "Ragdoll",
    dob: "16.02.2019",
    imgPath: "images/Emma.jpg",
  },
];

const renderSingleCat = (cat) => {
  const { name, gender, breed, dob, imgPath } = cat;
  const newCat = document.createElement("div");
  newCat.className = "cat-profile";

  newCat.innerHTML = `<img src=${imgPath} alt="" class="cat-photo" />
        <div class="about-cat">
          <h2 class="cat-name">${name}</h2>
          <div class="basic-info">
            <p>Gender: ${gender}</p>
            <p>Breed: ${breed}</p>
            <p>Date of birth: ${dob} r</p>
          </div>
          <a href="http://localhost:5173/cat.html"><button class="more-abt-cats">More</button></a>
        </div>`;

  swipeRight.insertAdjacentElement("beforebegin", newCat);
};

const renderAllCats = () => {
  fakeCats.forEach((cat) => {
    renderSingleCat(cat);
  });
};

window.onload = renderAllCats();