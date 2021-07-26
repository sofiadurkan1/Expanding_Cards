const panels = document.querySelectorAll('.panel');
panels.forEach(panel =>{
    panel.addEventListener('click',e =>{
        panel.classList.add('active');
    })

})

function removeActivePanel(){
    panel.forEach(panel=>{
        panel.classList.remove('active');
    })
}