/**
 * Zoice Documentation - Custom SEO Header Fix & Branding Integration
 * This script transforms sidebar <h5> group titles into <div> elements and
 * injects the "Zoice" brand name next to the SVG logo.
 */

function injectLogoText() {
    // Target the main logo link (usually the first link pointing to home)
    const logoLink = document.querySelector('a[href="/"]');
    if (!logoLink) return;

    // Check if text already exists to avoid duplicates
    if (logoLink.querySelector('.custom-logo-text')) return;

    const brandName = document.createElement('span');
    brandName.className = 'custom-logo-text';
    brandName.innerText = 'Zoice';
    brandName.style.display = 'inline-block'; // Defensive inline-block

    // Append to the end of the link container to ensure it follows any light/dark logos
    logoLink.appendChild(brandName);
}

function transformSidebarHeaders() {
    const sidebarH5s = document.querySelectorAll('#sidebar-content h5#sidebar-title');
    if (sidebarH5s.length === 0) return;

    sidebarH5s.forEach(h5 => {
        const div = document.createElement('div');
        // Copy content
        div.innerHTML = h5.innerHTML;
        // Copy all attributes (including classes and ID for styling)
        Array.from(h5.attributes).forEach(attr => {
            div.setAttribute(attr.name, attr.value);
        });
        // Replace the element
        h5.parentNode.replaceChild(div, h5);
    });
}

// Run on initial load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        transformSidebarHeaders();
        injectLogoText();
    });
} else {
    transformSidebarHeaders();
    injectLogoText();
}

// Observe for changes (SPA navigation)
const contentObserver = new MutationObserver((mutations) => {
    transformSidebarHeaders();
    injectLogoText();
});

// Start observing the body or a stable parent container
const startObserving = () => {
    const target = document.body;
    if (target) {
        contentObserver.observe(target, { childList: true, subtree: true });
    } else {
        setTimeout(startObserving, 100);
    }
};

startObserving();
