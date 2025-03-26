const menuBtn = document.querySelector('.menu-icon')
const menuIcon = document.querySelector('.menu-icon i')
const sideBar = document.querySelector('.sidebar')


menuBtn.onclick = function(){
    sideBar.classList.toggle('open')
    const isOpen = sideBar.classList.contains('open')

    if(isOpen){
        menuIcon.classList = 'bx bx-x'
    }else{
        menuIcon.classList = 'bx bx-menu'
    }
}




var loading = document.querySelector('.preloading')


window.addEventListener('load' , ()=>{
    loading.style.display = 'none'
})






const cardTeam = document.querySelectorAll('#team-card')
const followerBtn = document.querySelectorAll('.following')


cardTeam.addEventListener('mouseenter' , ()=>{
    followerBtn.style.display = 'block'
})

cardTeam.addEventListener('mouseleave' , ()=>{
    followerBtn.style.display = 'none'
})