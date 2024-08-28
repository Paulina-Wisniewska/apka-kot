import { createClient } from "@supabase/supabase-js";
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseApiUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabase = createClient(supabaseApiUrl, supabaseApiKey);

const fetchCats = async () => {
  try {
    const { data, error } = await supabase.from("cats").select();

    if (error) throw new Error("There was an error while fetching cats");

    return data;
  } catch (e) {
    console.log(e);
  }
};

const modal = document.querySelector(".add-cat-form");
const openButton = document.querySelector(".add-cat-btn");
const closeButtton = document.querySelector(".close-btn");
const swipeRight = document.querySelector(".swipe-right");
const form = document.querySelector(".add-form");

const openModal = () => {
  modal.classList.remove("hidden");
};

openButton.addEventListener("click", openModal);

const closeModal = () => {
  modal.classList.add("hidden");
};

closeButtton.addEventListener("click", closeModal);

const renderSingleCat = (cat, photo) => {
  const { name, gender, breed, dob } = cat;
  const newCat = document.createElement("div");
  newCat.className = "cat-profile";

  newCat.innerHTML = `<img src=${photo} alt="" class="cat-photo" />
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

const renderAllCats = async () => {
  const data = await fetchCats();
  const catsLength = data.length;
  const catPhotos = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=${catsLength}&api_key=${import.meta.env.VITE_CAT_API_KEY}`
  ).then((res) => res.json());

  const catUrls = catPhotos.map(cat => cat.url);

  data.forEach((cat, index) => {
    const photo = catUrls[index];
    renderSingleCat(cat, photo);
  });
};

window.onload = renderAllCats();


const handleSubmit = async (event) => {
  const formData = new  FormData(event.target);
  const name = formData.get("name");
  const breed = formData.get("breed");
  const gender = formData.get("gender");
  const birth = formData.get("birth");
  const getCat = await supabase.from('cats').insert({name: `${name}`,breed: `${breed}`, dob: `${birth}`, gender:`${gender}`});

};

form.addEventListener("submit", handleSubmit);



