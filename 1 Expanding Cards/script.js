const panels =document.querySelectorAll('.panel') //all the panels are selected  class given inside the quotes are used 

console.log(panels)  ;
panels.forEach(panel=>{
    console.log('Inside panel for list ')
        panel.addEventListener('click',() => {
        removeActiveClasses()
        console.log('Inside panel for list after removing the active ')

        panel.classList.add('active')
        console.log('Inside panel for list after adding the active ')

    })
    })

function  removeActiveClasses(){
    panels.forEach(panel=> {
        console.log('Inside remove panel for list ') ;
        panel.classList.remove('active')
    })
}
