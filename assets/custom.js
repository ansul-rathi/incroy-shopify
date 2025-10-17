<!-- ============================================================================= -->
<!-- Ella Custom JS - Customize The Style For Layout -->
<!-- ============================================================================= -->

<!-- ============================================================================= -->
<!-- IMPORTANT DISCLAIMER -->
<!-- Please use only JS to style the layout. -->
<!-- ============================================================================= -->
// ====== MEGA MENU SCRIPT ======
const navItems = document.querySelectorAll(".nav-item");
const dropdowns = document.querySelectorAll(".dropdown");

function hideAllDropdowns() {
  dropdowns.forEach((d) => d.classList.remove("active"));
}

navItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    hideAllDropdowns();
    const menuType = item.dataset.menu;
    const target = document.getElementById(`${menuType}-dropdown`);
    if (target) target.classList.add("active");
  });
});

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("mouseenter", () => dropdown.classList.add("active"));
  dropdown.addEventListener("mouseleave", () => dropdown.classList.remove("active"));
});

const navbar = document.querySelector(".navbar");
navbar.addEventListener("mouseleave", () => hideAllDropdowns());

// ====== TOGGLE LOGIC ======
const toggles = document.querySelectorAll(".toggle");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const submenu = toggle.nextElementSibling;
    const arrow = toggle.querySelector(".arrow-icon");

    const allMenus = toggle.closest(".menu-sections").querySelectorAll(".menu-group ul");
    const allArrows = toggle.closest(".menu-sections").querySelectorAll(".arrow-icon");

    allMenus.forEach((menu) => {
      if (menu !== submenu) menu.classList.remove("active");
    });
    allArrows.forEach((arr) => {
      if (arr !== arrow) arr.classList.remove("rotated");
    });

    submenu.classList.toggle("active");
    arrow.classList.toggle("rotated");
  });
});

document.addEventListener("click", (event) => {
  const isInsideDropdown = event.target.closest(".dropdown") || event.target.closest(".nav-item");
  if (!isInsideDropdown) hideAllDropdowns();
});

/* ------------------------------------------------------------------------------product card plus icon for size variant--------------------------------- */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.add-to-cart-size-btn').forEach((btn) => {
    btn.addEventListener('click', async function (e) {
      e.preventDefault();
      const variantId = this.dataset.variantId;
      const parent = this.closest('.sizes-popup');
      const addedMsg = parent.querySelector('.added-msg');

      try {
        const response = await fetch('/cart/add.js', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id: variantId, quantity: 1 }),
        });

        if (response.ok) {
          // Optional: update cart count badge if theme supports it
          addedMsg.style.display = 'block';
          setTimeout(() => (addedMsg.style.display = 'none'), 1500);
        } else {
          console.error('Add to cart failed');
        }
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    });
  });
});
