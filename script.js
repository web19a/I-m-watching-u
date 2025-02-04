function movePupils(x, y) {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        const pupil = eye.querySelector('.pupil');
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(y - eyeY, x - eyeX);
        const distance = Math.min(rect.width / 2 - pupil.offsetWidth / 2 - 6, Math.hypot(x - eyeX, y - eyeY));
        const constrainedX = distance * Math.cos(angle);
        const constrainedY = distance * Math.sin(angle);
        pupil.style.transform = `translate(${constrainedX}px, ${constrainedY}px) translate(-50%, -50%)`;
    });
}

const hangl = document.getElementById('handl')
const hangr = document.getElementById('handr')

document.addEventListener('mousemove', function (e) {
    movePupils(e.pageX, e.pageY);
});

document.addEventListener('touchmove', function (e) {
    const touch = e.touches[0];
    movePupils(touch.pageX, touch.pageY);
});
