/**
 * @param {Object} imgObject Object
 */

export const imageCarousel = function (imgObject) {
  const slidesContainer = document.querySelector(".slides-container");
  const swipeButtons = document.querySelectorAll(".change-btn");

  for (let key in imgObject) {
    const imgElement = document.createElement("img");
    imgElement.src = imgObject[key];
    slidesContainer.appendChild(imgElement);
  }

  const firstSlide = slidesContainer.firstElementChild;
  const slideWidth = parseFloat(getComputedStyle(firstSlide).width);
  const numberOfSlides = slidesContainer.childNodes.length;

  swipeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => swipeFunctionality(e))
  })

  function swipeFunctionality(button) {
    const currentPosition = currentSlidePosition();

    if (button.target.classList.contains("left")) {
      const newPosition = currentPosition + slideWidth;
      if (newPosition === slideWidth) return;
      slidesContainer.style.left = `${newPosition}px`;
    } else if (button.target.classList.contains("right")) {
      const newPosition = currentPosition - slideWidth;
      if (newPosition === (slideWidth*(-numberOfSlides))) return;
      slidesContainer.style.left = `${newPosition}px`;
    };

  }

  function currentSlidePosition () {
    return parseFloat(window.getComputedStyle(slidesContainer).getPropertyValue("left"));
  }

}
