//declaring the necessary variables 
let base = document.querySelector('#Base')
let height = document.querySelector('#Height')
let calculate = document.querySelector('button')
let answer = document.querySelector('#Answer')

calculate.addEventListener('click',()=>{
    answer.innerText = ('Answer: ' + (eval(`(1/2)*${base.value} * ${height.value}`).toFixed(2) +(' cm²')))  //using area formula of a tringle with 2 inputs
})