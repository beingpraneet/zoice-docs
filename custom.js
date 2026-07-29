/**
 * Zoice Documentation - Custom SEO Header Fix & Branding Integration
 * This script transforms sidebar <h5> group titles into <div> elements and
 * injects the "Zoice" brand name next to the SVG logo.
 */

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TUTORIALS DATA
 * To add a new tutorial: append an object to this array.
 * Fields:
 *   title    (string)  – Card heading shown on the grid
 *   href     (string)  – Link to the tutorial page
 *   image    (string|null) – Path to featured image, or null for black placeholder
 *   description (string)  – Short summary shown under the image
 * ─────────────────────────────────────────────────────────────────────────────
 */
const TUTORIALS = [
    {
        title: 'How to Make a Singing AI Avatar Video',
        href: '/learning/singing-ai-avatar',
        image: '/images/how-to-make-a-singing-ai-avatar-video-using-ai.png',
        description: 'Create singing AI avatar videos by combining your talking avatars with customized vocal tracks or uploaded music.'
    },
    {
        title: 'How to Make an Old Photo Sing a Song Using AI',
        href: '/learning/old-photo-singing',
        image: '/images/how-to-make-old-photo-sing-a-song.png',
        description: 'Bring historic portraits or family photos to life by animating them to sing your favorite songs with realistic facial expressions.'
    },
    {
        title: 'How to Make a Cartoon Character Talk Using AI',
        href: '/learning/cartoon-character-talk',
        image: '/images/how-to-make-a-cartoon-character-talk-using-ai.png',
        description: 'Animate any cartoon or illustrated character with realistic lip-sync, expressive emotions, and a matching AI voice.'
    },
    {
        title: 'How to Create an AI Avatar for Healthcare Marketing',
        href: '/learning/ai-avatar-healthcare-marketing',
        image: '/images/how-to-create-ai-avatar-for-healthcare-marketing.jpg',
        description: 'Learn how to create an AI avatar for healthcare marketing using AI avatars with Zoice. Make patient education, wellness tips, medical awareness, and training videos without a camera.'
    },
    {
        title: 'How to Create a Podcast with AI',
        href: '/learning/podcast-with-ai',
        image: '/images/how-to-create-a-podcast-video-with-ai.jpg',
        description: 'Generate professional podcast episodes using AI voices — no microphone or studio needed. Write a script, pick a voice, and publish.'
    },
    {
        title: 'How to Create an AI Astrologer Video Using AI',
        href: '/learning/ai-astrologer-video',
        image: '/images/how-to-create-an-ai-astrologer-video-using-ai.jpg',
        description: 'Build a mystical AI astrologer avatar and generate engaging horoscope, zodiac, and spiritual guidance videos in minutes.'
    },
    {
        title: 'How to Make a Singing Animal Avatar Video Using AI',
        href: '/learning/singing-animal-avatar',
        image: '/images/how-to-make-a-singing-animal-avatar-video-using-ai.jpg',
        description: 'Turn your pet photos or any animal image into a realistic singing avatar with accurate lip-syncing and facial expressions in minutes.'
    },
    {
        title: 'How to Create an AI News Anchor Video',
        href: '/learning/ai-news-anchor',
        image: '/images/how-to-create-an-ai-news-anchor-video.jpg',
        description: 'Turn any image into a virtual news presenter and deliver breaking news, corporate updates, and announcements in minutes.'
    },
    {
        title: 'How to Create a Real Estate AI Avatar Video',
        href: '/learning/real-estate-ai-avatar',
        image: '/images/how-to-create-a-real-estate-ai-avatar.jpg',
        description: 'Generate virtual property tours, neighborhood guides, and market updates with a professional AI real estate agent.'
    },
    {
        title: 'How to Create an Avatar Using Zoice Avatar X Photo-to-Video',
        href: '/learning/avatar-x-photo-to-video',
        image: '/images/how-to-create-avatar-photo-to-video.jpg',
        description: 'Upload a single photo and a script to generate a realistic talking avatar video with Avatar X — no filming or recording equipment required.'
    },
    {
        title: 'How to Get Started with Photo Avatars',
        href: '/learning/photo-avatars',
        image: '/images/how-to-get-started-with-photo-avatars.jpg',
        description: 'Upload a photo or generate one with AI to create a realistic talking avatar. Learn prompt writing, motion tips, and how to produce professional videos in minutes.'
    },
    {
        title: 'How to Create an AI Avatar for Finance Advisor',
        href: '/learning/ai-avatar-finance-advisor',
        image: '/images/how-to-create-ai-avatar-for-finance-advisor.jpg',
        description: 'Create investment guides, market updates, and financial planning videos with a professional AI finance advisor avatar — no camera or studio needed.'
    },
    {
        title: 'How to Create an AI Avatar for Lawyer',
        href: '/learning/ai-avatar-lawyer',
        image: '/images/how-to-create-ai-avatar-for-lawyer.jpg',
        description: 'Produce legal explainer videos, client education content, and law firm introductions using a professional AI lawyer avatar in minutes.'
    },
    {
        title: 'How to Create Your First Digital Twin with Zoice Avatar X',
        href: '/learning/create-your-digital-twin-video-avatar-x',
        image: '/images/how-to-create-digital-twin-avatar-x.jpg',
        description: 'Turn a single photo and voice recording into a hyper-realistic AI twin that delivers any script in 100+ languages — no camera needed.'
    },
    {
        title: 'How to Make a Singing Pet Avatar Video Using AI',
        href: '/learning/singing-pet',
        image: '/images/how-to-make-a-singing-pet-video-using-ai.jpg',
        description: 'Turn your pet photos into a realistic singing avatar with accurate lip-syncing and facial expressions in minutes.'
    },
    {
        title: 'How to Make a Talking Pet Avatar Video Using AI',
        href: '/learning/talking-pet',
        image: '/images/how-to-make-a-talking-pet-video-using-ai.jpg',
        description: 'Upload your pet photo, select a voice, add a script, and generate a realistic talking pet video in minutes.'
    },
    {
        title: 'How to Create an AI Stand Up Comedy Video',
        href: '/learning/ai-stand-up-comedy-video',
        image: '/images/how-to-create-ai-stand-up-comedy-video.jpg',
        description: 'Turn any image or character into a digital stand-up comedian and generate funny stand-up comedy videos in minutes.'
    }
];

// ─────────────────────────────────────────────────────────────────────────────

function injectLogoText() {
    // Target only the actual logo links that contain the nav-logo images
    var logoLinks = document.querySelectorAll('a[href="/"]');

    logoLinks.forEach(function (logoLink) {
        // Only inject if the link contains a logo image
        if (!logoLink.querySelector('img.nav-logo')) return;

        // Check if text already exists to avoid duplicates
        if (logoLink.querySelector('.custom-logo-text')) return;

        var brandName = document.createElement('span');
        brandName.className = 'custom-logo-text';
        brandName.innerText = 'Zoice';
        brandName.style.display = 'inline-block'; // Defensive inline-block

        // Append to the end of the link container to ensure it follows any light/dark logos
        logoLink.appendChild(brandName);
    });
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

function buildTutorialCard(tutorial) {
    const a = document.createElement('a');
    a.className = 'tutorial-card';
    a.href = tutorial.href;
    a.dataset.category = 'tutorials';

    const content = document.createElement('div');
    content.className = 'tutorial-card-content';

    // Featured image area
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'tutorial-image-wrapper';

    if (tutorial.image) {
        const img = document.createElement('img');
        img.className = 'tutorial-image';
        img.src = tutorial.image;
        img.alt = tutorial.title;
        imageWrapper.appendChild(img);
    } else {
        // Black placeholder
        imageWrapper.classList.add('tutorial-image-placeholder');
    }

    // Title (below image)
    const title = document.createElement('h3');
    title.className = 'tutorial-title';
    title.textContent = tutorial.title;

    // Description
    const desc = document.createElement('p');
    desc.className = 'tutorial-description';
    desc.textContent = tutorial.description;

    content.appendChild(imageWrapper);
    content.appendChild(title);
    content.appendChild(desc);
    a.appendChild(content);
    return a;
}

function initTutorialsPagination() {
    const grid = document.getElementById('tutorials-grid-container');
    const paginationContainer = document.getElementById('tutorials-pagination');
    if (!grid || !paginationContainer) return;

    // Check if we already initialized to avoid duplicate observers/bindings
    if (grid.dataset.paginated === 'true') return;
    grid.dataset.paginated = 'true';

    // Render cards from TUTORIALS data array
    grid.innerHTML = '';
    TUTORIALS.forEach(tutorial => {
        grid.appendChild(buildTutorialCard(tutorial));
    });

    const items = Array.from(grid.querySelectorAll('.tutorial-card'));
    const searchInput = document.getElementById('tutorials-search');

    const itemsPerPage = 6;
    let currentPage = 1;
    let searchQuery = '';

    function getFilteredItems() {
        return items.filter(item => {
            const title = (item.querySelector('.tutorial-title')?.innerText || '').toLowerCase();
            const desc = (item.querySelector('.tutorial-description')?.innerText || '').toLowerCase();
            const matchesSearch = searchQuery === '' || title.includes(searchQuery) || desc.includes(searchQuery);
            return matchesSearch;
        });
    }

    function showPage(page) {
        currentPage = page;
        const filtered = getFilteredItems();
        const totalPages = Math.ceil(filtered.length / itemsPerPage);

        if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        // Hide all first
        items.forEach(item => {
            item.style.display = 'none';
        });

        // Show only active & visible ones
        filtered.forEach((item, index) => {
            if (index >= start && index < end) {
                item.style.display = 'flex';
            }
        });

        renderPagination(filtered.length);

        // Scroll to top of the grid smoothly if user paginates
        if (page > 1 || grid.getBoundingClientRect().top < 0) {
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function renderPagination(totalActiveItems) {
        paginationContainer.innerHTML = '';
        const totalPages = Math.ceil(totalActiveItems / itemsPerPage);
        if (totalPages <= 1) return;

        // Prev button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.innerText = 'Prev';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => showPage(currentPage - 1));
        paginationContainer.appendChild(prevBtn);

        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-btn' + (i === currentPage ? ' active' : '');
            pageBtn.innerText = i;
            pageBtn.addEventListener('click', () => showPage(i));
            paginationContainer.appendChild(pageBtn);
        }

        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.innerText = 'Next';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => showPage(currentPage + 1));
        paginationContainer.appendChild(nextBtn);
    }

    // Set up search event listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.toLowerCase().trim();
            currentPage = 1;
            showPage(1);
        });
    }

    showPage(1);
}

/**
 * Finds any <a> links pointing to .mp3 files and replaces them with
 * a real HTML5 <audio> player injected via JavaScript, bypassing
 * Mintlify's MDX sanitiser which strips <audio> tags server-side.
 */
function injectAudioPlayers() {
    // Find all links whose href ends with .mp3
    const audioLinks = document.querySelectorAll('a[href$=".mp3"]');
    audioLinks.forEach(function (link) {
        // Avoid double-injecting
        if (link.dataset.audioInjected) return;
        link.dataset.audioInjected = 'true';

        const src = link.getAttribute('href');

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'margin: 0.75rem 0;';

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.style.cssText = 'width: 100%; border-radius: 0.5rem;';
        audio.preload = 'metadata';

        const source = document.createElement('source');
        source.src = src;
        source.type = 'audio/mpeg';

        audio.appendChild(source);
        wrapper.appendChild(audio);

        // Replace the link with the audio player
        link.parentNode.replaceChild(wrapper, link);
    });
}

/**
 * Finds any <a> links pointing to .mp4 files and replaces them with
 * a real HTML5 <video> player injected via JavaScript, bypassing
 * Mintlify's MDX sanitiser.
 */
function injectVideoPlayers() {
    // Find all links whose href ends with .mp4
    const videoLinks = document.querySelectorAll('a[href$=".mp4"]');
    videoLinks.forEach(function (link) {
        // Avoid double-injecting
        if (link.dataset.videoInjected) return;
        link.dataset.videoInjected = 'true';

        const src = link.getAttribute('href');

        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'margin: 0.75rem 0;';

        const video = document.createElement('video');
        video.controls = true;
        video.style.cssText = 'width: 100%; border-radius: 0.75rem;';
        video.preload = 'metadata';

        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';

        video.appendChild(source);
        wrapper.appendChild(video);

        // Replace the link with the video player
        link.parentNode.replaceChild(wrapper, link);
    });
}

// Run on initial load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        transformSidebarHeaders();
        injectLogoText();
        initTutorialsPagination();
        injectAudioPlayers();
        injectVideoPlayers();
    });
} else {
    transformSidebarHeaders();
    injectLogoText();
    initTutorialsPagination();
    injectAudioPlayers();
    injectVideoPlayers();
}

// Observe for changes (SPA navigation)
const contentObserver = new MutationObserver((mutations) => {
    transformSidebarHeaders();
    injectLogoText();
    initTutorialsPagination();
    injectAudioPlayers();
    injectVideoPlayers();
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
