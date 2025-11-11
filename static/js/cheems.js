//document object model



document.addEventListener("DOMContentLoaded", () => {

   const randomNumber = Math.floor(Math.random() * 14 ) + 1;

   //TODO: eliminar antes de lanzar el juego
   console.debug("Numero random: " + randomNumber)

   const images = document.querySelectorAll(".cheems-card img"); //regresa una coleccion con los elementos que cumplan la condicion, este caso imagenes con clase cheems-card

   images.forEach((img, index) => {

        const id = index + 1;
        img.dataset.id = id;
        

        img.addEventListener("click", () => {

            if (id == randomNumber){
                img.src = window.IMG_BAD;
                
                alert("Perdiste")
                

            } else{
                img.src = window.IMG_OK;
                //alert("Ganaste")
            }
        })
        
   })

});