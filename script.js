// ==========================================
// e-Muhdi
// Main JavaScript
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // REVEAL ANIMATION
  // ===============================

  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  // ===============================
  // CONSOLE
  // ===============================

  console.log("e-Muhdi berhasil dimuat.");
});
