function opencards(){
    var allelem = document.querySelectorAll('.elem')
var fullelem = document.querySelectorAll('.fullelem')
let close = document.querySelectorAll('.fullelem .back')
allelem.forEach((element, id) => {
    element.addEventListener('click',()=>{
        fullelem[id].style.display = 'block'     
    })
})
close.forEach(function(elem,id){
       elem.addEventListener('click',function(){
         fullelem[id].style.display = 'none'
       })

})
}
opencards()