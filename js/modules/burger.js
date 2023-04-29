export const burger=()=>{
    const burgerBtn=document.querySelector('.burger')
    const headerMenu=document.querySelector('.header__menu')
    burgerBtn.addEventListener('click',()=>{
        burgerBtn.classList.toggle('active')
        headerMenu.classList.toggle('active')
    })
}