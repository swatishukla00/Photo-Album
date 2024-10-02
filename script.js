const imageScroll = document.querySelector('.image-scroll');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBubbles = document.querySelectorAll('.progress-bubble');

let currentPage = 0;
const totalPages = progressBubbles.length;

function updateProgressIndicator() {
    progressBubbles.forEach((bubble, index) => {
        bubble.classList.toggle('active', index === currentPage);
    });
}

function scrollToPage(page) {
    imageScroll.scrollTo({
        left: page * imageScroll.clientWidth,
        behavior: 'smooth'
    });
    currentPage = page;
    updateProgressIndicator();
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        scrollToPage(currentPage - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
        scrollToPage(currentPage + 1);
    }
});

imageScroll.addEventListener('scroll', () => {
    const newPage = Math.round(imageScroll.scrollLeft / imageScroll.clientWidth);
    if (newPage !== currentPage) {
        currentPage = newPage;
        updateProgressIndicator();
    }
});

// Smooth scrolling with mouse wheel
imageScroll.addEventListener('wheel', (event) => {
    event.preventDefault();
    imageScroll.scrollLeft += event.deltaY;
});

// Image enlargement
document.querySelectorAll('.image-3d').forEach(image => {
    image.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        const enlargedImg = image.cloneNode(true);
        enlargedImg.classList.add('enlarged');
        overlay.appendChild(enlargedImg);

        // Ensure the image fits within the screen
        const aspectRatio = image.naturalWidth / image.naturalHeight;
        const maxWidth = window.innerWidth * 0.9;
        const maxHeight = window.innerHeight * 0.9;

        if (maxWidth / aspectRatio <= maxHeight) {
            enlargedImg.style.width = maxWidth + 'px';
            enlargedImg.style.height = 'auto';
        } else {
            enlargedImg.style.width = 'auto';
            enlargedImg.style.height = maxHeight + 'px';
        }

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });

        overlay.style.display = 'flex';
    });
});

// Initialize progress indicator
updateProgressIndicator();
