function typeWriter(elemento) {

    const text = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    text.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra
        },75 * i)
    })
}

const titulo = document.getElementById('js')
typeWriter(titulo)



function Escrever(Element) {

    const texto = Element.innerHTML.split('')
    Element.innerHTML = ''
    texto.forEach((letras, i) => {
        setTimeout(function(){
            Element.innerHTML += letras
        },150 * i)
    })
}

 const texto = window.document.getElementById('bemvindos')
 Escrever(texto)


 const foto = document.getElementById('img')
 foto.addEventListener("mousemove", fotoEffect )

 function fotoEffect(event){
    const fotoWidht = foto.offsetWidth
    const fotoheight = foto.offsetHeight
    const centerX = foto.offsetLeft + fotoWidht/2
    const centerY = foto.offsetTop + fotoWidht/2
    const positionX = event.clientX - centerX
    const positionY = event.clientY - centerY
    
    const rotateX = 25*positionX/(fotoheight/2)
    const rotateY = 25*positionX/(fotoWidht/2)
    foto.style.transform = `perspective(500px) rotate(${rotateX}deg) rotateY(${rotateY}deg)`
 }


    
