const cartRoot = document.getElementById("cart-root");

setInterval(() => {
  const num = parseInt(Math.random() * 10);
  cartRoot.innerHTML = `<h4>Random number: ${num}<h4>`;
}, 1200);
