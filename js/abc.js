const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-layer');
const back = document.querySelector('.back-layer');


const sFront = 200;
const sBack = 40;

parallax.addEventListener('mousemove', e => {
    const x = 2 * (e.clientX);
    const y = 2 * (e.clientY);

    front.style.transform = `translate(
        ${(x/10) / sFront}%,
        ${(y/10) / sFront}%
    )`;

    back.style.transform = `translate(
        ${(x/4) / sBack}%,
        ${(y/4) / sBack}%
    )`;
});