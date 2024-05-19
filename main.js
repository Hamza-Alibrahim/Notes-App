let notes = document.querySelector(".notes");
if (localStorage.getItem("notes")) notes.innerHTML = localStorage.getItem("notes");
function createNote() {
    let div = document.createElement("div");
    div.innerHTML = `<p contenteditable="true" spellcheck="false"></p><img src="imgs/delete.png">`;
    div.className = "note";
    notes.appendChild(div);
    saveData();
};
notes.addEventListener("click", e => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.tagName === "P") e.target.onkeyup = saveData;
});
function saveData() { localStorage.setItem("notes", notes.innerHTML); };
document.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    };
});