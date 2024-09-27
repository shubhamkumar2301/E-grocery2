const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    slider.scrollLeft += slider.clientWidth; // Scroll right
});

prevBtn.addEventListener('click', () => {
    slider.scrollLeft -= slider.clientWidth; // Scroll left
});
