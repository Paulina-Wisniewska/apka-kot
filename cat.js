import { createClient } from "@supabase/supabase-js";
const supabaseApiKey = import.meta.env.VITE_SUPABASE_API_KEY;
const supabaseApiUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL;
const supabase = createClient(supabaseApiUrl, supabaseApiKey);

const fetchNotes = async () => {
    try {
        const {data, error} = await supabase.from("notes").select();

        if (error) throw new Error("There was an error while fetching notes");

        return data;
    } catch (e) {
        console.log(e);
    }
};


const modal = document.querySelector(".add-cat-form");
const openButton = document.querySelector(".add-note-btn");
const closeButtton = document.querySelector(".close-btn");
const swipeRight = document.querySelector(".swipe-right");

const openModal = () => {
    modal.classList.remove("hidden");
}

openButton.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hidden");
}

closeButtton.addEventListener("click", closeModal);

const renderSingleNote = (note) =>  {
    const {date, description} = note;
    const newNote = document.createElement("div");
    newNote.className = "daily-note-view";

    newNote.innerHTML = `<div class="note">
          <h2 class="date">${date} r.</h2>
          <div class="basic-info">
            <p>
              ${description}
            </p>
          </div>
          <button class="view-more">View more</button>
        </div>`;

        swipeRight.insertAdjacentElement("beforebegin", newNote);
};

const renderAllNotes = async () => {
    const data = await fetchNotes();
    const notesLenght = data.length;

    data.forEach((note) => {
        renderSingleNote(note);
    });
};

window.onload = renderAllNotes();