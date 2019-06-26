let position = 0
const body = document.querySelector('body')
const carElement = document.createElement('div')

carElement.style.width = '100px'
carElement.style.height = '100px'
carElement.style.backgroundColor = 'red'

carElement.style.position = 'absolute'
carElement.style.left = '0px'

body.appendChild(carElement)

setInterval(
    function(){
        position = position + 10
        carElement.style.left = position +'px'
    },
    100
)