// Cache the DOM
var button = document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("image")
var asteptari = document.getElementById("asteptari")

button.addEventListener("click", Altaviata)

function Altaviata()
{
    nume.innerHTML = "Functie: Java Dev"
    prenume.innerHTML = "Loc: Maldive"
    asteptari.innerHTML = "Experiente:<ol><li>work and travel</li><li>internship</li></ol>"
    img.src = "img.jpg"
    body.style.backgroundColor = "orange"
    body.style.color ="black"

    // opacitate imagine

    //grosimea marginilor imaginii
}