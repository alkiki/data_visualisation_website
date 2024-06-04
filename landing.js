document.addEventListener("DOMContentLoaded", function() {
    const tellMeMoreLink = document.getElementById('tellMeMoreLink');
    const moreInfoBox = document.getElementById('moreInfoBox');
    const child = document.getElementById("child");
    const images = document.getElementById("images")


    // function that show more detailed explanation, initially it is hidden
    tellMeMoreLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        if (moreInfoBox.style.display === 'none' || moreInfoBox.style.display === '') {
            moreInfoBox.style.display = 'block';
            tellMeMoreLink.textContent = 'Hide'
            images.style.display = "none"

        } else {
            moreInfoBox.style.display = 'none';
            tellMeMoreLink.textContent = 'Tell me more!';
            images.style.display = "flex"
        }
    });
});