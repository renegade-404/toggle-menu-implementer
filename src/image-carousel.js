/**
 * @param {Object} imgObject Object
 */

export const imageCarousel = function (imgObject) {
  const slidesContainer = document.querySelector(".slides-container");
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

  swipeRightButton.addEventListener("click", swipeRight);
  swipeLeftButton.addEventListener("click", swipeLeft);

  function swipeRight() {
    const currentPosition = currentSlidePosition();
    const newPosition = currentPosition - slideWidth;
    
    if (newPosition === (slideWidth*(-numberOfSlides))) return;
    slidesContainer.style.left = `${newPosition}px`;
  }

  function swipeLeft () {
    const currentPosition = currentSlidePosition();
    const newPosition = currentPosition + slideWidth;

    if (newPosition === slideWidth) return;
    slidesContainer.style.left = `${newPosition}px`;
  }

  function currentSlidePosition () {
    return parseFloat(window.getComputedStyle(slidesContainer).getPropertyValue("left"));
  }

}
