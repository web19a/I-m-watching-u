document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.pageY - eyeY, event.pageX - eyeX);
        const pupilX = Math.cos(angle) * (rect.width / 4);
        const pupilY = Math.sin(angle) * (rect.height / 4);
        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    });
});
