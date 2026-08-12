const menuButton = document.querySelector('.menuButton');
const links = document.querySelector('.links');
menuButton.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => links.classList.remove('open')));

const scenes = [
  ['Under the oak lights', 'A sprawling garden patio inspired by the store photos: string lights, live-oak shade, colorful chairs, and easy San Antonio nights.'],
  ['Airstream hideaway', 'Private-party energy with a whimsical trailer lounge, floral murals, and long-table celebrations.'],
  ['Vinyl hour glow', 'Drop in after work for records, cocktails, and Southern snacks from 3–6PM on weekdays.'],
];
const scene = document.querySelector('#scene');
document.querySelectorAll('.moment').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.moment').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const index = Number(button.dataset.scene);
    scene.className = `scene scene${index}`;
    scene.innerHTML = `<div class="sceneIcon">♬</div><h3>${scenes[index][0]}</h3><p>${scenes[index][1]}</p>`;
  });
});

const status = document.querySelector('#status');
const day = new Date().getDay();
status.textContent = day >= 1 && day <= 5 ? 'Vinyl Hour warms up at 3PM' : 'Brunch mode is on';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('revealed');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.section, .experience, .visit, .heroCard, .heroCopy').forEach((item) => observer.observe(item));
