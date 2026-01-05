/**
 * Zoice Documentation - Custom SEO Header Fix
 * This script transforms sidebar <h5> group titles into <div> elements.
 * This ensures that the page's <H1> is the first heading in the DOM source order,
 * providing better SEO hierarchy as reported by search indexers.
 */

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
    document.addEventListener('DOMContentLoaded', transformSidebarHeaders);
} else {
    transformSidebarHeaders();
}

// Observe for sidebar changes (SPA navigation)
const sidebarObserver = new MutationObserver((mutations) => {
    // Use a small debounce or check if H5s exist before transforming
    if (document.querySelectorAll('#sidebar-content h5#sidebar-title').length > 0) {
        transformSidebarHeaders();
    }
});

// Start observing the body or a stable parent container
const startObserving = () => {
    const target = document.body;
    if (target) {
        sidebarObserver.observe(target, { childList: true, subtree: true });
    } else {
        setTimeout(startObserving, 100);
    }
};

startObserving();
