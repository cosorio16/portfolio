const container = ".content";
const texts = [
  "React",
  "JavaScript",
  "Django",
  "CSS3",
  "Tailwind",
  "Python",
  "Astro",
  "Git",
  "HTML",
  "GitHub",
  "VSCode",
  "Sass",
];
const options = {
  radius: 250,
  maxSpeed: "fast",
  initSpeed: "fast",
};

TagCloud(container, texts, options);

AOS.init({
  once: true,
  delay: 100,
  duration: 350,
  mirror: true,
});
