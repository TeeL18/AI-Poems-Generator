function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "beautiful flowers",
    autoStart: true,
    delay: 75,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
