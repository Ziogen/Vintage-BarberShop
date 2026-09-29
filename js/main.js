const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const navBar = document.getElementById("nav");

const services = [
  {
    title: "Classic haircut",
    text: "Timeless cuts with modern precision tailored to your style.",
    image: "assets/images/feature-1.jpg",
  },
  {
    title: "Beard Trim",
    text: "Shape and line-up your beard for a clean, sharp finish",
    image: "assets/images/feature-2.jpg",
  },
  {
    title: "Straight Razor Shave",
    text: "Hot towel treatment with a smooth tradional shave.",
    image: "assets/images/feature-3.jpg",
  },
];

const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Services", href: "#features" },
    { label: "Book", href: "#cta" },
    { label: "Contact", href: "#footer" },
];

const setCurrentYear = () => {
  const now = new Date();
  yearEl.textContent = now.getFullYear();
};

let isMenuOpen = false;
const toggleMobileMenu = () => {
  if (!mobileMenu) return;
  if (isMenuOpen === false) {
    mobileMenu.classList.add("is-open");
    isMenuOpen = true;
  } else {
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
  }
};

const closeMobileMenu = () => {
  if (!mobileMenu) return;
  mobileMenu.classList.remove("is-open");
  isMenuOpen = false;
};

const updateHeadingText = (newText) => {
  if (!heading) return;
  heading.textContent = newText;
};

setCurrentYear();

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMobileMenu();
  });
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      closeMobileMenu();
    }
  });
}

if (ctaBtn) {
  ctaBtn.addEventListener("click", () => {
    updateHeadingText("Booking coming next - great choice!");
  });
}

if (callBtn) {
  callBtn.addEventListener("click", () => {
    if (phoneLink) {
      updateHeadingText("Call us at " + phoneLink.textContent);
    } else {
      updateHeadingText("Call feature coming next!");
    }
  });
}

const renderFeatures = () => {
  if (!featureGrid) return;
  services.forEach((service) => {
    const card = document.createElement("article");
    card.classList.add("feature-card");
    card.innerHTML = `
    <img src="${service.image}" alt="${service.title}" class="feature-img"
    />
    <h3 class="feature-title">${service.title}</h3>
    <p class="feature-text">${service.text}</p>
    `;
    featureGrid.appendChild(card);
  });
};

const renderFeaturesMap = () => {
    const cardsHTML = services.map(service => {
        return `
        <article class="feature-card">
        <img src="${service.image}" alt="${service.title}" class="feature-img" />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.text}</p>
        </article>
        `;
    }).join("");

    featureGrid.innerHTML = cardsHTML;
};

const renderNavigation = () => {
    if (nav) {
        const navHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="nav-link">${link.label}</a>
            `;
        }).join("");

        nav.innerHTML = navHTML;
    }

    if (mobileMenu) {
        const mobileHTML = navLinks.map((link) => {
            return `
            <a href="${link.href}" class="mobile-link">${link.label}</a>
            `;
        }).join("");

        mobileMenu.innerHTML = mobileHTML;
    }
};

renderFeatures();
renderFeaturesMap();
renderNavigation();