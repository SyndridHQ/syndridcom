(() => {
  const content = window.SYNDRID_SITE_CONTENT || {};

  document.querySelectorAll("[data-content]").forEach((element) => {
    const key = element.dataset.content;
    const value = content[key];

    if (typeof value !== "string") return;

    if (key === "headline") {
      element.innerHTML = value;
    } else {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    const value = content.links?.[key];

    if (typeof value === "string") {
      element.setAttribute("href", value);
    }
  });

  const year = document.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  const field = document.querySelector("#firefly-field");

  if (field) {
    const isMobile = window.matchMedia("(max-width: 680px)").matches;
    const count = isMobile ? 32 : 72;

    const seeded = (index) => {
      const value = Math.sin(index * 991.73) * 10000;
      return value - Math.floor(value);
    };

    for (let index = 1; index <= count; index += 1) {
      const firefly = document.createElement("span");
      firefly.className = "firefly";

      const size = 1.2 + seeded(index * 3) * 3.4;
      const x = seeded(index * 5) * 100;
      const y = 48 + seeded(index * 7) * 47;
      const flicker = 2.2 + seeded(index * 11) * 5.4;
      const drift = 5 + seeded(index * 13) * 9;

      firefly.style.left = `${x}%`;
      firefly.style.top = `${y}%`;
      firefly.style.setProperty("--size", `${size}px`);
      firefly.style.setProperty("--flicker", `${flicker}s`);
      firefly.style.setProperty("--drift", `${drift}s`);
      firefly.style.animationDelay = `${-seeded(index * 17) * 7}s, ${-seeded(index * 19) * 8}s`;

      field.appendChild(firefly);
    }
  }
})();
