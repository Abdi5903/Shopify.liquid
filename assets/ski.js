(function () {
  // Size buttons
  const sizeButtons = document.querySelectorAll(".size-btn");
  const selectedSizeEl = document.getElementById("selected-size");

  let selectedSize = "160";
  sizeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      sizeButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      selectedSize = btn.dataset.size;
      selectedSizeEl.textContent = selectedSize;
    });
  });

  // Fake cart counter (kun UI demo – ikke Shopify cart)
  const addBtn = document.getElementById("add-to-cart");
  const cartCountEl = document.getElementById("cart-count");
  let count = 0;

  addBtn.addEventListener("click", () => {
    count += 1;
    cartCountEl.textContent = String(count);
    addBtn.textContent = `Added (${selectedSize} cm)`;
    setTimeout(() => (addBtn.textContent = "Add to cart"), 900);
  });

  // Accordion
  document.querySelectorAll(".acc-header").forEach(header => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("is-open");
      const icon = header.querySelector(".acc-icon");
      if (icon) icon.textContent = header.parentElement.classList.contains("is-open") ? "×" : "+";
    });
  });

  // Thumbnail swap
  const mainImg = document.querySelector(".ski__main");
  document.querySelectorAll(".thumb").forEach(t => {
    t.addEventListener("click", () => {
      const src = t.dataset.src;
      if (src && mainImg) mainImg.src = src;
    });
  });
})();
