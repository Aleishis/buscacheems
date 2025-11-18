//document object model



document.addEventListener("DOMContentLoaded", () => {

   const randomNumber = Math.floor(Math.random() * 14 ) + 1;

   //TODO: eliminar antes de lanzar el juego
   console.debug("Numero random: " + randomNumber)

   const images = document.querySelectorAll(".cheems-card img"); //regresa una coleccion con los elementos que cumplan la condicion, este caso imagenes con clase cheems-card


    const clickedCards = new Set();

   images.forEach((img, index) => {

        const id = index + 1;
        img.dataset.id = id;

        
        
        img.addEventListener("click", () => {

            if(!clickedCards.has(id)){
            clickedCards.add(id);
        }

            if (id == randomNumber){
                img.src = window.IMG_BAD;

                images.forEach((img, index) => {
                    let id = index + 1;

                    if (id != randomNumber){
                        img.src = window.IMG_OK
                    }

                })  
                alert("Perdiste")
                

            } else{
                img.src = window.IMG_OK;
                //alert("Ganaste")

                if(clickedCards.size === 14){
                    alert("Ganaste");
                }
            }
        })
        
   })

});