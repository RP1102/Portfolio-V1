

document.getElementById("titre").innerText += "ROMAIN PONTACQ"


// - THIS IS THE CODE FOR THE THEME SWITCHER - // 
const body = document.body
const links = document.getElementById("navigation")
const topBarEl = document.getElementById("topbar-el")
const themeSwitcher = document.querySelector('input[type=checkbox]')
themeSwitcher.checked = false
// Get the root element
let r = document.querySelector(':root')

themeSwitcher.addEventListener("change", function(){
    if(this.checked){
        body.style.backgroundColor = "rgba(27, 27, 27)"
        // body.style.backgroundColor = "#3e4372"
        body.style.color = "#F7F7F7"
        r.style.setProperty('--themeContent',"rgba( 42, 42, 42, 0.25 )")
        r.style.setProperty('--themeShadow',"0 8px 32px 0 rgba(  12, 12, 12 , 0.37 )")
        r.style.setProperty('--gadgetColor', "rgb( 42, 42, 42)")

    }
    else{
        body.style.backgroundColor = "rgba(247, 247, 247, 1)"
        // body.style.backgroundColor = "#eeedff"
        body.style.color = "#1b1b1b"
        r.style.setProperty('--themeContent', "rgba( 255, 255, 255, 0.25 )")
        r.style.setProperty('--themeShadow',"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px")
        r.style.setProperty('--gadgetColor', "rgb( 255, 255, 255)")
    }
})
// - END - //




document.getElementById("about-el").innerText = "</About>"
document.getElementById("proj-el").innerText = "</Project>"
document.getElementById("contact-el").innerText = "</Contact>"



// -- THIS IS THE CODE FOR THE PROGRESS BAR -- //
window.onscroll = function() {myFunction()}

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  let scrolled = (winScroll / height) * 100
  document.getElementById("myBar").style.height = scrolled + "%"
} 


// -- END -- //


// --- THIS IS THE CODE FOR THE 3 COLORED BUTTONS --- //

function myFunction_set(color) {
  r.style.setProperty('--color', color)
}

function toGreen(){
    myFunction_set("#32c267")
}
function toBlue(){
    myFunction_set("#59a5ff")
}
function toOrange(){
    myFunction_set("#ff8b00")
}
// --- END --- //



