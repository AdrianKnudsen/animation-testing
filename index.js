document.addEventListener("DOMContentLoaded", () => {
  const liElements = document.querySelectorAll(".animation-boxes li");

  function animateRandomElement() {
    liElements.forEach((el) => el.classList.remove("animated"));

    const numberOfElementsToAnimate =
      Math.floor(Math.random() * liElements.length) + 1;
    const selectedIndices = new Set();

    while (selectedIndices.size < numberOfElementsToAnimate) {
      const randomIndex = Math.floor(Math.random() * liElements.length);
      selectedIndices.add(randomIndex);
    }

    selectedIndices.forEach((index) => {
      liElements[index].classList.add("animated");
    });
  }

  setInterval(animateRandomElement, 3800);
});
