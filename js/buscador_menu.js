// -------Buscador que borra lo que escribes con la tecla ESC-------

document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){
  
        if (e.key ==="Escape")e.target.value = ""
  
        document.querySelectorAll(".card").forEach(menu =>{
  
            menu.textContent.toLowerCase().includes(e.target.value.toLowerCase())
              ?menu.classList.remove("filtro")
              :menu.classList.add("filtro")
        })
  
    }
  
  })