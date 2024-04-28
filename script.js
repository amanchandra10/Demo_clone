const slideContainer = document.querySelector('.main');
const sliderText = document.querySelector('.slide__current');
const btnLeft = document.querySelector('.slideBtnLeft');
const btnRight = document.querySelector('.slideBtnRight');

const sliderImages = [
  {
    src: '/Recources/theme_8_c5c72c66_XL.jpg',
    text: '1'
  },
  {
    src: './Recources/theme_8_41dce162_XL.jpg',
    text: '2'
  },
];

let slideCounter = 0;

const startSlider = () => {
  slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
  sliderText.innerHTML = sliderImages[0].text;
};

btnRight.addEventListener('click', function() {
  if (slideCounter === sliderImages.length - 1) {
    slideContainer.style.backgroundImage = `url(${sliderImages[0].src})`;
    sliderText.innerHTML = sliderImages[0].text;
    slideCounter = -1;

    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 10);
  }
  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter + 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter + 1].text;
  slideCounter++;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 10);
});

btnLeft.addEventListener('click', function() {
  if (slideCounter === 0) {
    slideContainer.style.backgroundImage = `url(${sliderImages[sliderImages.length - 1].src})`;
    sliderText.innerHTML = sliderImages[sliderImages.length - 1].text;
    slideCounter = sliderImages.length;
    slideContainer.classList.add('fadeIn');
    setTimeout(() => {
      slideContainer.classList.remove('fadeIn');
    }, 10);
  }

  slideContainer.style.backgroundImage = `url(${sliderImages[slideCounter - 1].src})`;
  sliderText.innerHTML = sliderImages[slideCounter - 1].text;
  slideCounter--;
  slideContainer.classList.add('fadeIn');
  setTimeout(() => {
    slideContainer.classList.remove('fadeIn');
  }, 10);
});
document.addEventListener('DOMContentLoaded', startSlider);











// ===============mid slider=============================================


// JavaScript File

// Reference To Buttons
var btnLeft1 = document.getElementById('prev_btn');
var btnRight1 = document.getElementById('next_btn');

// Reference To Slider
var slider = document.querySelector('.container1 .slider');

btnRight1.addEventListener('click', nextSlide);
function nextSlide(){
	slider.appendChild(slider.firstElementChild);
}

btnLeft1.addEventListener('click', prevSlide);
function prevSlide(){
	slider.prepend(slider.lastElementChild);
}

// Auto Sliding
function autoSlide(){
	deleteInterval = setInterval(timer, 4000); // 4000 mile sec = 4 sec
	function timer(){
		nextSlide();
	}
}
autoSlide();

// Stop Auto Sliding When Mouse is Over
slider.addEventListener('mouseover', deleteAutoSliding);
btnRight1.addEventListener('mouseover', deleteAutoSliding);
btnLeft1.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding(){
	clearInterval(deleteInterval);
}

// Resume Auto Sliding When Mouse is Out
slider.addEventListener('mouseout', autoSlide);
btnRight1.addEventListener('mouseout', autoSlide);
btnLeft1.addEventListener('mouseout', autoSlide);