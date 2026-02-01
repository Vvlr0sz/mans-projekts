console.log("JS pieslēgts un darbojas");

const infoText = document.getElementById("infoText");
const nameInput = document.getElementById("nameInput");
const colorButton = document.getElementById("colorButton");
const messageArea = document.getElementById("messageArea");

let changed = false;

// Funkcija teksta krāsas maiņai
function changeTextColor(textElement) {

    if (changed) {
        textElement.style.color = "#333";
        messageArea.textContent = "Teksta krāsa atjaunota sākotnējā stāvoklī.";
    } else {
        textElement.style.color = "#1e88e5";
        messageArea.textContent = "Teksta krāsa tika mainīta uz zilu.";
    }

    changed = !changed;
}

// Funkcija lietotāja vārda pārbaudei
function greetUser(name) {

    if (name.length < 2) {
        messageArea.textContent = "Lūdzu, ievadi pilnu vārdu.";
    } else {
        messageArea.textContent = "Sveiki, " + name + "! Prieks Jūs redzēt mūsu lapā.";
    }
}

// Pogas notikums
colorButton.addEventListener("click", function () {
    changeTextColor(infoText);
});

// Ievades lauka notikums
nameInput.addEventListener("input", function () {
    greetUser(nameInput.value);
});
