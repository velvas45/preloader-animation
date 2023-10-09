function startPreLoader() {
  let counterEl = document.querySelector(".counter");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) return;

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) currentValue = 100;

    counterEl.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

// Starting Preloader
startPreLoader();

// Animation with GSAP
gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
});

gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  stagger: 0.2,
  ease: "power4.inOut",
});

gsap.from(".h1", 1.5, {
  delay: 4,
  y: 700,
  stagger: 0.3,
  ease: "power4.inOut",
});

gsap.from(".hero", 2, {
  delay: 5,
  y: 400,
  ease: "power4.inOut",
});
