document.getElementById("button_altera_img").onclick = function() {
    let imagem = document.getElementById("image1");
    imagem.src = "image2.webp"; // Substitua por outra imagem
}

document.getElementById("button_altera_title").onclick = function() {
    let text = document.getElementById("titulo");
    text.innerText = "Novo titulo"; // Substitua por outra imagem
}
document.getElementById("button_altera_phrase").onclick = function() {
    let text = document.getElementById("texto");
    text.style.color = 'lightblue'
}


document.getElementById("toca_audio").onclick = function(){

let audio = document.getElementById("myaudio")

audio.play()

}

document.getElementById("button_altera_class").onclick = function() {
    let button1 = document.getElementById("button_altera_class");
    let button2 = document.getElementById("btn1");
    let button3 = document.getElementById("btn2");


  button1.classList.toggle("class-color1");
  button2.classList.toggle("class-color2");
  button3.classList.toggle("class-color3")

}