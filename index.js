document.addEventListener("DOMContentLoaded", (event) => {
  const circles = document.querySelectorAll(".circles li");

  setTimeout(() => {
    circles.forEach((circle) => {
      circle.addEventListener(
        "click",
        function () {
          // to stop the css animation
          this.style.animation = "none";
          const boxWidth = document.querySelector(".circle-box").offsetWidth;
          const boxHeight = document.querySelector(".circle-box").offsetHeight;

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
