const txtInput = document.querySelector(".inputs input"),
checkBtn = document.querySelector(".inputs button"),
infoTxt = document.querySelector(".info-text");
let filterInput;

checkBtn.addEventListener("click", () => {
    // a felhasználó által beírt karakterek felosztása, megfordítása
    // és egyetlen szóba való egyesítése
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput) {
        return infoTxt.innerHTML = `Nem, a <span>'${txtInput.value}'</span> nem palindrom!`;
    }
    infoTxt.innerHTML = `Igen, a <span>'${txtInput.value}'</span> palindrom!`;
});


txtInput.addEventListener("keyup", () => {
    // szóközök és speciális karakterek eltávolítása a beírt értékből
    filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput) {
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
});