// Image Animation
function animateFadeIn() {
  const topSection = document.querySelector('.main__top');
  topSection.classList.add('slide-in');
  topSection.style.backgroundPosition = '0 0';

  setTimeout(() => {
    topSection.style.backgroundPosition = '100% 0';
  }, 1000);
}

setTimeout(animateFadeIn, 1000);

// Blockquote Animation
function animateSlideIn() {
  const quote = document.querySelector('.main__blockquote');
  const profile = document.querySelector('.main__profile');

  quote.classList.add('animate');
  profile.classList.add('animate');
}

setTimeout(animateSlideIn, 1000);

const btn = document.querySelectorAll('.btn');
const imgElement = document.querySelector('.main__img');
const paraElement = document.querySelector('.main__para');
const nameElement = document.querySelector('.main__name');
const jobElement = document.querySelector('.main__job');

btn.forEach((button) => {
  button.addEventListener('click', () => {
    const isTanya = imgElement.src.includes('tanya');
    const newImgSrc = isTanya ? './images/image-john.jpg' : './images/image-tanya.jpg';
    const newImgAlt = isTanya ? 'John' : 'Tanya';
    const newParaText = isTanya
      ? `“ If you want to lay the best foundation possible I’d recommend taking this course. 
          The depth the instructors go into is incredible. I now feel so confident about 
          starting up as a professional developer. ”`
      : `“I’ve been interested in coding for a while but never taken the jump, until now.
          I couldn’t recommend this course enough. I’m now in the job of my dreams and so
          excited about the future.”`;
    const newNameText = isTanya ? 'John Tarkpor' : 'Tanya Sinclair';
    const newJobText = isTanya ? 'Junior Front-end Developer' : 'UX Engineer';

    imgElement.classList.add('slide-out');
    paraElement.classList.add('slide-out');
    nameElement.classList.add('slide-out');
    jobElement.classList.add('slide-out');

    setTimeout(() => {
      imgElement.src = newImgSrc;
      imgElement.alt = newImgAlt;
      paraElement.textContent = newParaText;
      nameElement.textContent = newNameText;
      jobElement.textContent = newJobText;

      imgElement.classList.remove('slide-out');
      paraElement.classList.remove('slide-out');
      nameElement.classList.remove('slide-out');
      jobElement.classList.remove('slide-out');
    }, 500);
  });
});
