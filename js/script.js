// =========================
// TRANSISI HALAMAN
// =========================

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // biar link WA popup ga ikut fade
    if (href && !href.startsWith("#") && !href.includes("wa.me")) {
      e.preventDefault();

      document.querySelector("main").classList.add("fade-out");

      setTimeout(() => {
        window.location.href = href;
      }, 250);
    }
  });
});

// =========================
// POPUP PRODUK
// =========================

const cards = document.querySelectorAll(".card");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const popupTitle = document.getElementById("popup-title");

const popupPrice = document.getElementById("popup-price");

const popupDesc = document.getElementById("popup-desc");

const popupWa = document.getElementById("popup-wa");

const closePopup = document.getElementById("close-popup");

// buka popup
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const img = card.dataset.img;

    const title = card.dataset.title;

    const price = card.dataset.price;

    const desc = card.dataset.desc;

    // isi popup
    popupImg.src = img;

    popupTitle.textContent = title;

    popupPrice.textContent = price;

    popupDesc.textContent = desc;

    // template pesan WA
    const message =
      `Halo kak profesor aca cantik banget banget banget 👋\n` +
      `Saya tertarik dengan ${title}\n` +
      `Harga: ${price}\n\n` +
      `Apakah bouquet ini masih tersedia?`;

    // link WA otomatis
    popupWa.href =
      `https://wa.me/62895323049469?text=` + encodeURIComponent(message);

    popupWa.target = "_blank";

    // tampilkan popup
    popup.style.display = "flex";
  });
});

// tombol close
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});

// klik area luar popup
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
