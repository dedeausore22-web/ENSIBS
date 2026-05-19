function promotion(année){
    var image;
    if(année==2023){
    image = "promotion 2023.jpg"}
    else if (année == 2022){
    image = "promotion 2022.jpg"}
    else {
    image = "promotion 2021.jpg"}
    document.getElementById("monImage").src = image;
}

function AffichageTexte() {     
    document.getElementById("bouton-actualites").innerHTML =
        "L'ENSIBS devient la 5ème école associée au réseau Polytech";
}

function retrouver_nous() {
document.getElementById("Lorient").style.fontSize = "35px";
document.getElementById("Lorient").style.color = "white";
document.getElementById("Lorient").style.backgroundColor = "blue";
document.getElementById("Lorient").innerHTML = "17 Bd Flandres Dunkerque 1940, 56100 Lorient";
}

function Test() {
document.getElementById("Date").textContent = new Date().toLocaleString("fr-FR", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});
}
    

