
const seeMoreButtons = document.querySelectorAll('.see-more');

    
seeMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        
        const content = button.previousElementSibling;

        
        if (content.style.display === 'none' || content.style.display === '') {
            content.style.display = 'block'; 
            button.textContent = 'See Less'; 
        } else {
            content.style.display = 'none'; 
            button.textContent = 'See More'; 
        }
    });
});