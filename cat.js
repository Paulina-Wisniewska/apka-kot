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

const fakeNotes = [
    {
        id: 0,
        date: '01.06.2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturquis cursus mi, eu lacinia metus.'
    },
    {
        id: 1,
        date: '26.05.2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturquis cursus mi, eu lacinia metus.'
    },
    {
        id: 2,
        date: '17.05.2024',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabiturquis cursus mi, eu lacinia metus.'
    }
];

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

const renderAllNotes = () => {
    fakeNotes.forEach((note) => {
        renderSingleNote(note);
    });
};

window.onload = renderAllNotes();