console.log("JS pieslēgts un darbojas");

const colorButton = document.getElementById("colorButton");
const infoText = document.getElementById("infoText");
const nameInput = document.getElementById("nameInput");
const messageArea = document.getElementById("messageArea");

let isBlue = false;

// CLICK notikums — maina teksta krāsu
colorButton.addEventListener("click", function() {

    if (isBlue) {
        infoText.style.color = "#333";
        messageArea.textContent = "Teksta krāsa atjaunota sākotnējā stāvoklī.";
    } else {
        infoText.style.color = "#2980b9";
        messageArea.textContent = "Teksta krāsa tika mainīta uz zilu.";
    }

    isBlue = !isBlue;
});

// INPUT notikums — reaģē uz ievadīto vārdu
nameInput.addEventListener("input", function() {

    const userName = nameInput.value;

    if (userName.length > 0) {
        messageArea.textContent = "Sveiki, " + userName + "! Prieks Jūs redzēt mūsu lapā.";
    } else {
        messageArea.textContent = "";
    }

});
