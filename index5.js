let signin1 = document.querySelector('.signin1')
let signin = document.querySelector('.signin')
console.log(signin1)

let registerlink = document.querySelector('.signin1 p a')
console.log(registerlink)


registerlink.onclick = function registerlink(){
    signin.style.display= 'block'
    signin.style.paddingTop= '20px'
    signin.style.height= '34rem'
    signin1.style.display= 'none'
}