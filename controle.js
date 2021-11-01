const imagem1 = document.getElementById("bImg1")
const imagem2 = document.getElementById("bImg2")
const imagem3 = document.getElementById("bImg3")

const imagens = document.getElementById("imagens");

function estaCheio(){
    return imagens.src.indexOf('img3') > -1
}

function trocaImg1 () {
    imagens.src = './img/img1.jpg'
}
function trocaImg2 () {
    imagens.src = './img/img2.jpg'
}
function trocaImg3 () {
    imagens.src = './img/img3.jpg'
}
 function trocaImg4 (){
    if( estaCheio() ){
        imagens.src = './img/img4.jpg'
    }
     
 }

imagem1.addEventListener( 'click' , trocaImg1 )
imagem2.addEventListener( 'click' , trocaImg2 )
imagem3.addEventListener( 'click' , trocaImg3 )

imagens.addEventListener( 'mouseout' , trocaImg1 )

imagens.addEventListener( 'dblclick' , trocaImg4 )

//console.log(estaCheio()); falso ou -1 se tiver