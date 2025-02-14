const summaryTotal = document.querySelector('.summary__button')
const observerSummary = new IntersectionObserver(entry => {
    const summarySticky = document.querySelector('.summary__sticky')
    
    if(entry[0].isIntersecting){
        
        summarySticky.classList.add('summaryHide')
    }else{
        summarySticky.classList.remove('summaryHide')
        
    }
},{threshold: 0.1})

observerSummary.observe(summaryTotal)
