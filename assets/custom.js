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
// document.addEventListener('DOMContentLoaded', function () {
  
//   // Plus icon click - Mobile only
//   document.querySelectorAll('.show-sizes-icon').forEach((icon) => {
//     icon.addEventListener('click', function(e) {
//       e.stopPropagation();
      
//       // Close all other popups first
//       document.querySelectorAll('.sizes-popup.active').forEach((popup) => {
//         popup.classList.remove('active');
//       });
      
//       // Open this popup
//       const wrapper = this.closest('.product-size-wrapper');
//       const popup = wrapper.querySelector('.sizes-popup');
//       popup.classList.add('active');
//     });
//   });
  
//   // Close button
//   document.querySelectorAll('.close-sizes-btn').forEach((btn) => {
//     btn.addEventListener('click', function(e) {
//       e.stopPropagation();
//       const popup = this.closest('.sizes-popup');
//       popup.classList.remove('active');
//     });
//   });
  
//   // Close on outside click
//   document.addEventListener('click', function(e) {
//     if (window.innerWidth <= 768) {
//       if (!e.target.closest('.product-size-wrapper')) {
//         document.querySelectorAll('.sizes-popup.active').forEach((popup) => {
//           popup.classList.remove('active');
//         });
//       }
//     }
//   });
  
//   // Add to cart with size
//   document.querySelectorAll('.add-to-cart-size-btn').forEach((btn) => {
//     btn.addEventListener('click', async function (e) {
//       e.preventDefault();
//       e.stopPropagation();
      
//       const variantId = this.dataset.variantId;
//       const size = this.dataset.size;
      
//       // Visual feedback
//       this.classList.add('selected');
      
//       console.log('Adding to cart - Variant ID:', variantId, 'Size:', size);

//       try {
//         const response = await fetch('/cart/add.js', {
//           method: 'POST',
//           headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({ 
//             items: [{
//               id: parseInt(variantId),
//               quantity: 1,
//               properties: {
//                 'Size': size
//               }
//             }]
//           }),
//         });

//         if (!response.ok) {
//           throw new Error('Failed to add to cart');
//         }

//         const data = await response.json();
//         console.log('✅ Added to cart:', data);

//         // Close popup on mobile
//         if (window.innerWidth <= 768) {
//           setTimeout(() => {
//             const popup = this.closest('.sizes-popup');
//             popup.classList.remove('active');
//           }, 300);
//         }
        
//         // Update cart
//         fetch('/cart.js')
//           .then(res => res.json())
//           .then(cart => {
//             console.log('Cart updated:', cart);
            
//             // Update cart count
//             const cartCount = document.querySelector('.cart-count, .cart-counter, [data-cart-count]');
//             if (cartCount) {
//               cartCount.textContent = cart.item_count;
//             }
            
//             // Trigger cart drawer
//             const cartDrawer = document.querySelector('[data-cart-drawer]');
//             if (cartDrawer) {
//               cartDrawer.classList.add('is-open', 'active');
//             }
            
//             // Dispatch events
//             document.dispatchEvent(new CustomEvent('cart:updated', { detail: cart }));
//             document.dispatchEvent(new CustomEvent('cart:refresh'));
//           });
        
//         // Remove selected state
//         setTimeout(() => {
//           this.classList.remove('selected');
//         }, 500);

//       } catch (error) {
//         console.error(' Error adding to cart:', error);
//         alert('Could not add to cart. Please try again.');
//         this.classList.remove('selected');
//       }
//     });
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;

  // Pages jahan BLACK header chahiye
  const blackHeaderPages = [
    "/pages/contact",
    "/blogs/news",
    "/pages/about-us",
    "/account/login",
    "/pages/shipping-policy",
    "/pages/privacy-policy",
    "/pages/returns-refunds",
    "/pages/terms-conditions"
  ];

  const body = document.body;

  if (blackHeaderPages.includes(path)) {
    body.classList.add("header-black-url");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Check if HOME page
  if (window.location.pathname === "/" || document.body.classList.contains("template-index")) {

    // Mobile header icons
    document.querySelectorAll(
      ".header-mobile__item .icon, .header-mobile__item svg.icon path"
    ).forEach(el => {
      el.style.fill = "white";
    });

    // Logo invert
    const logo = document.querySelector(".header__heading-logo");
    if (logo) {
      logo.style.filter = "invert(1)";
    }

    // Menu trigger text
    document.querySelectorAll(".menu-trigger").forEach(el => {
      el.style.color = "white";
    });

  }
});


