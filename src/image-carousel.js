/**
 * @param {Object} imgObject Object
 */

export const imageCarousel = function (imgObject) {
  const slidesContainer = document.querySelector(".slides-container");
  const changeButtons = document.querySelectorAll(".change-btn");

  for (let key in imgObject) {
    const imgElement = document.createElement("img");
    imgElement.src = imgObject[key];
    slidesContainer.appendChild(imgElement);
  }

  function swipeFunctionality (button) {
    const firstSlide = slidesContainer.firstElementChild;
    const slideWidth = parseFloat(getComputedStyle(firstSlide).width);
    const slidePositionLeft = parseFloat(window.getComputedStyle(slidesContainer).getPropertyValue("left"));

    if (button.target.classList.contains("left")) {
      const newPosition = slidePositionLeft + slideWidth;
      if (newPosition === slideWidth) return;
      slidesContainer.style.left = `${newPosition}px`;
    } else if (button.target.classList.contains("right")) {
      const newPosition = slidePositionLeft - slideWidth;
      if (newPosition === (slideWidth*(-4))) return; // change to length
      slidesContainer.style.left = `${newPosition}px`;
    };
    
  }
  changeButtons.forEach(btn => {
    btn.addEventListener("click", (e) => swipeFunctionality(e))
  })

}
