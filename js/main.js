const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");

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