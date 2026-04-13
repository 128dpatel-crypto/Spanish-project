document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('slide-counter');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function updatePresentation() {
        // Update slides
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
                slide.querySelectorAll('.text-box-trigger').forEach(box => {
                    box.classList.remove('show-text');
                });
            }
        });

        // Update counter
        counter.textContent = `${currentSlide + 1} / ${totalSlides}`;

        // Update buttons
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === totalSlides - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updatePresentation();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            updatePresentation();
        }
    });

    // Reveal text ONLY when the specific designated text box is clicked
    document.querySelectorAll('.text-box-trigger').forEach(box => {
        box.addEventListener('click', () => {
            box.classList.add('show-text');
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            if (currentSlide > 0) {
                currentSlide--;
                updatePresentation();
            }
        }
        if (e.key === 'ArrowRight') {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updatePresentation();
            }
        }
    });
});
