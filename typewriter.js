const words = ["software."];

const typewriter = new TypeIt("#typewriter", {
  speed: 95,
  cursor: false,
});

words.forEach((word) => {
  typewriter.type(word).pause(600);
});

typewriter.go();
