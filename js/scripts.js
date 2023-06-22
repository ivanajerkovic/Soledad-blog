function toggleMobileMenu() {
    const navigationLinks = document.querySelector('.mobile-menu');

    navigationLinks.classList.add('show');

}

// window.addEventListener('mouseup', function (e) {
//     const navigationLinks = document.querySelector('.mobile-menu');

//     if (event.target !== document.querySelector(".mobile-menu") && navigationLinks.classList.contains('show')) {
//         navigationLinks.classList.remove('show');
        
//     }
// });

function closeMobileMenu() {
    const navigationLinks = document.querySelector('.mobile-menu');

    navigationLinks.classList.remove('show');

}