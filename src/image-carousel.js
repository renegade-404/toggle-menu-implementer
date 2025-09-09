/**
 * @param {Object} imgObject Object
 */

export const imageCarousel = function (imgObject) {
  const slidesContainer = document.querySelector(".slides-container");
  const indicatorsContainer = document.querySelector(".indicators-list");
  const slidesPositionList = [];
  const swipeRightButton = document.querySelector(".change-btn-right");
  const swipeLeftButton = document.querySelector(".change-btn-left");

  for (let key in imgObject) {
    const imgElement = document.createElement("img");
    imgElement.src = imgObject[key];
    slidesContainer.appendChild(imgElement);
  }

  const firstSlide = slidesContainer.firstElementChild;
  const slideWidth = parseFloat(getComputedStyle(firstSlide).width);
  const numberOfSlides = slidesContainer.childNodes.length;

  // create indicators for slides and list of position coordinates
  for (let i = 0; i < numberOfSlides; i++) {
    const liElement = document.createElement("li");
    const buttonIndicator = document.createElement("button");
    buttonIndicator.classList.add(`${String(i)}`, "ind-btn");
    liElement.appendChild(buttonIndicator);
    indicatorsContainer.appendChild(liElement);

    slidesPositionList.push(slideWidth*(-i));
  }

  const indicatorButtons = document.querySelectorAll(".ind-btn");
  
  indicatorButtons.forEach(btn => {
    btn.addEventListener("click", (e) => indicatorSlidePositionChange(e));
  })
  swipeRightButton.addEventListener("click", swipeRight);
  swipeLeftButton.addEventListener("click", swipeLeft);
  loopSlides();

  async function loopSlides() {
    while (true) {
      await fiveSecondsDelay();
      if (currentSlidePosition() === (slideWidth * (-numberOfSlides))) {
        slidesContainer.style.left = 0;
      }
    }
  }

  function fiveSecondsDelay() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const currentPosition = currentSlidePosition();
        const newPosition = currentPosition - slideWidth;
        slidesContainer.style.left = `${newPosition}px`;
        resolve();
      }, 2000)
    })
  }

  function swipeRight() {
    const currentPosition = currentSlidePosition();
    const newPosition = currentPosition - slideWidth;

    if (newPosition === (slideWidth * (-numberOfSlides))) return;
    slidesContainer.style.left = `${newPosition}px`;
  }

  function swipeLeft() {
    const currentPosition = currentSlidePosition();
    const newPosition = currentPosition + slideWidth;

    if (newPosition === slideWidth) return;
    slidesContainer.style.left = `${newPosition}px`;
  }

  function currentSlidePosition() {
    return parseFloat(window.getComputedStyle(slidesContainer).getPropertyValue("left"));
  }

  function indicatorSlidePositionChange (e) {
    const indicatorNumber = [...e.target.classList].filter(num => num != "ind-btn")[0];
    slidesPositionList.forEach((position, index) => {
      if (index === Number(indicatorNumber)) slidesContainer.style.left = `${position}px`
    })
  }

}
