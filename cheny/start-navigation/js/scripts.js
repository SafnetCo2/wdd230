function toggleMenu(){
    document.getElementById("primaryN").classList.toggle("open")
    document.getElementById("btn").classList.toggle("open")
}
const x =document.getElementById("btn")
x.onclick=toggleMenu;