console.log("JS pieslēgts un darbojas");

// CLICK notikums pogai
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("text").style.color = "red";
    document.getElementById("message").textContent = "Teksts tika mainīts!";
});

// INPUT notikums ievades laukam
document.getElementById("nameInput").addEventListener("input", function() {
    let name = this.value;
    document.getElementById("message").textContent = "Sveiki, " + name + "!";
});
