console.log("JS pieslēgts un darbojas");

const infoText = document.getElementById("infoText");
const nameInput = document.getElementById("nameInput");
const colorButton = document.getElementById("colorButton");
const messageArea = document.getElementById("messageArea");

let changed = false;

// CLICK event
colorButton.addEventListener("click", function () {

    if (changed) {
        infoText.style.color = "#333";
        messageArea.textContent = "Teksta krāsa atgriezta sākotnējā stāvoklī.";
    } else {
        infoText.style.color = "#1e88e5";
        messageArea.textContent = "Teksta krāsa tika mainīta.";
    }

    changed = !changed;
});

// INPUT event
nameInput.addEventListener("input", function () {

    const name = nameInput.value;

    if (name !== "") {
        messageArea.textContent = "Sveiki, " + name + "! Laipni lūdzam mūsu lapā.";
    } else {
        messageArea.textContent = "";
    }

});
