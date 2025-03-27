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





