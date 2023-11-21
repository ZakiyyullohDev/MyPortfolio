const myInfoBtn = document.querySelector("#myInfo")
const portfolioBtn = document.querySelector("#portfolio")
const tajribaBtn = document.querySelector("#tajriba")
const contactBtn = document.querySelector("#contact")
const topFunc = document.querySelector(".top-func")

myInfoBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top: 830,
        behavior: 'smooth'
    })
})

portfolioBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top:1570,
        behavior: 'smooth'
    })
})

tajribaBtn.addEventListener("click", ()=> {
    window.scrollTo({
        top:2870,
        behavior: 'smooth'
    })
})

contactBtn.addEventListener('click', ()=> {
    window.scrollTo({
        top:3700,
        behavior: 'smooth'
    })
})

topFunc.addEventListener('click', () => {
    
    // Scroll to the top of the page
    
    window.scrollTo({
        
        top: 0,
        
        behavior: 'smooth'
        
    });
    
});
