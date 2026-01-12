(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  const menuBtn = document.querySelector(".menu");
  const mobileNav = document.getElementById("mobileNav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });
  }

  const tiles = document.querySelectorAll(".tile__img[data-img]");
  tiles.forEach((t) => {
    const src = t.getAttribute("data-img");
    if (!src) return;
    const img = new Image();
    img.onload = () => {
      t.style.backgroundImage = `url('${src}')`;
      t.style.backgroundSize = "cover";
      t.style.backgroundPosition = "center";
      t.style.borderBottom = "1px solid rgba(255,255,255,.10)";
      t.textContent = "";
    };
    img.src = src;
  });

  const copyBtn = document.getElementById("copyTemplate");
  const status = document.getElementById("copyStatus");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const text =
`Subject: Art enquiry (Yatee Art Studio)

Hi Yatee,
My name is …
I’m interested in: (original / print)
Piece name (if known): …
Shipping country/city: …

Message:
…`;

      try {
        await navigator.clipboard.writeText(text);
        if (status) status.textContent = "Copied enquiry template to clipboard ✨";
      } catch (e) {
        if (status) status.textContent = "Copy failed — you can copy manually.";
      }
    });
  }
})();
