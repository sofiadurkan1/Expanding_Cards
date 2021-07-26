
const panels = document.querySelectorAll(".panel");
panels.forEach(panel => {
    panel.addEventListener('click',e => {
        removeActivePanel();
        panel.classList.add('active');
    });

});

function removeActivePanel(){
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
}