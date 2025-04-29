document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  elementos.forEach(el => observador.observe(el));
});
