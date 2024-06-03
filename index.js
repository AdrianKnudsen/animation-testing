document.addEventListener("DOMContentLoaded", (event) => {
  const circles = document.querySelectorAll(".circles li");

  setTimeout(() => {
    circles.forEach((circle) => {
      circle.addEventListener(
        "click",
        function () {
          // stops the css animation
          this.style.animation = "none";
          const boxWidth = document.querySelector(".circles li").offsetWidth;
          const boxHeight = document.querySelector(".circles li").offsetHeight;

          const newX = Math.random() * (boxWidth - this.offsetWidth);
          const newY = Math.random() * (boxHeight - this.offsetHeight);

          this.style.transition = "transform 1s ease-in";
          this.style.transform = `translate(${newX}px, ${newY}px)`;
          this.style.animation = "";

          this.style.transform = "";
        },
        1
      );
    });
  });
});
