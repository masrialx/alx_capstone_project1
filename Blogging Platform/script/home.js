// Get references to the elements
const imgList = document.getElementById('imglist');
const list = document.querySelector('.header .headers .list ul');
const headersx = document.querySelector('.header #headersx');

// Function to toggle the visibility of the list based on window width
function toggleVisibility() {
    if (window.innerWidth > 800) {
        list.style.visibility = 'visible';
    } else {
        list.style.visibility = 'hidden';
    }
}

// Initial check for visibility when the page loads
toggleVisibility();

// Event listener for window resize to update visibility
window.addEventListener('resize', toggleVisibility);

// Click event listener for imgList to toggle list visibility
imgList.addEventListener('click', () => {
    list.style.visibility = list.style.visibility === 'visible' ? 'hidden' : 'visible';
});

// Scroll event listener to handle header and imgList positioning
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        // When scrolled past 100 pixels
        headersx.style.position = 'fixed';
        headersx.style.display = 'flex';
        headersx.style.width = '100%';
        headersx.style.backgroundColor = '#07406e';
        headersx.style.justifyContent = 'space-around';
        imgList.style.position = 'absolute';
    } else {
        // When not scrolled or scrolled back up
        imgList.style.top = '15px';
        headersx.style.width = '80%';
        headersx.style.height = '10vh';
        headersx.style.display = 'flex';
        headersx.style.justifyContent = 'space-between';
        headersx.style.position = 'static';
        headersx.style.backgroundColor = 'initial';
    }
});
