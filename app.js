document.addEventListener('DOMContentLoaded', () => {

    // --- DOM ELEMENTS ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const homeBtn = document.getElementById('homeBtn');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    const viewAllPortfolioBtn = document.getElementById('viewAllPortfolioBtn');

    const portfolioCategoriesContainer = document.getElementById('portfolio-categories');
    const modal = document.getElementById('full-portfolio-modal');
    const modalBody = document.getElementById('modal-content-body');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    // Video Modal Elements
    const videoModal = document.getElementById('video-player-modal');
    const videoModalContent = document.getElementById('video-modal-content');
    const closeVideoModalBtn = document.getElementById('close-video-modal-btn');
    const videoPlayerContainer = document.getElementById('video-player-container');
    const videoTitleModal = document.getElementById('video-title-modal');
    const videoContentTypeModal = document.getElementById('video-content-type-modal');
    const videoEditingStyleModal = document.getElementById('video-editing-style-modal');
    const videoSoftwareModal = document.getElementById('video-software-modal');

    const portfolioData = {

  // ================= VIDEO EDITING =================
  'Video Editing': [
    // --- Horizontal Videos ---
    {
  mediaType: 'video',
  aspectRatio: 'ar-horizontal',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770874542/HairstickyLandscape_u2stzf.mp4",
  title: 'Podcast Production Edit',
  contentType: 'Podcast Video Content',
  editingStyle: 'Cinematic Color Grade + Multi-Cam Clean Cuts',
  editingSoftware: ['DaVinci Resolve']
},

{
  mediaType: 'video',
  aspectRatio: 'ar-horizontal',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770879950/%E0%A4%B0%E0%A4%BE%E0%A4%A3%E0%A4%BE_%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%97%E0%A4%BE_%E0%A4%B5%E0%A4%BF%E0%A4%B5%E0%A4%BE%E0%A4%A6_%E0%A4%AE%E0%A5%87%E0%A4%82_%E0%A4%A6%E0%A4%BF%E0%A4%97%E0%A5%8D%E0%A4%B5%E0%A4%BF%E0%A4%9C%E0%A4%AF_%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%B9_%E0%A4%95%E0%A5%80_%E0%A4%8F%E0%A4%82%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80___%E0%A4%B8%E0%A4%BE%E0%A4%82%E0%A4%B8%E0%A4%A6_%E0%A4%95%E0%A5%80_%E0%A4%9F%E0%A4%BF%E0%A4%AA%E0%A5%8D%E0%A4%AA%E0%A4%A3%E0%A5%80_%E0%A4%AA%E0%A4%B0_%E0%A4%AD%E0%A4%A1%E0%A4%BC%E0%A4%95%E0%A5%87_%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%BF%E0%A4%8F_%E0%A4%95%E0%A5%8D%E0%A4%AF%E0%A4%BE_%E0%A4%95%E0%A4%B9%E0%A4%BE_dogfey.mp4",
  title: 'Hair Care Product Commercial',
  contentType: 'Beauty Brand Advertisement',
  editingStyle: 'Commercial Cinematic Look + Smooth Product Focus Transitions',
  editingSoftware: ['DaVinci Resolve']
},
    
    // --- Vertical Videos ---
{
  mediaType: 'video',
  aspectRatio: 'ar-vertical',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770873454/AI_video_xepfjs.mp4",
  title: 'AI Technology Promo',
  contentType: 'Tech Promotional Reel',
  editingStyle: 'Modern Tech Motion + Clean Cuts',
  editingSoftware: ['Premiere Pro', 'After Effects']
},

{
  mediaType: 'video',
  aspectRatio: 'ar-vertical',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770873719/Clothing_cr5zmm.mp4",
  title: 'Fashion Brand Reel',
  contentType: 'Product Marketing Reel',
  editingStyle: 'Smooth Transitions + Color Boost',
  editingSoftware: ['Premiere Pro']
},

{
  mediaType: 'video',
  aspectRatio: 'ar-vertical',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770874810/Cooking_ecsa8o.mp4",
  title: 'Cooking / Food Reel',
  contentType: 'Food Social Media Content',
  editingStyle: 'Cinematic Food Color Grade + Smooth Cuts',
  editingSoftware: ['Premiere Pro']
},

{
  mediaType: 'video',
  aspectRatio: 'ar-vertical',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770873783/Explainer_dzqm2x.mp4",
  title: 'Business Explainer Reel',
  contentType: 'Explainer Content',
  editingStyle: 'Text Motion + Clean Visual Flow',
  editingSoftware: ['After Effects', 'Premiere Pro']
},
{
  mediaType: 'video',
  aspectRatio: 'ar-vertical',
  videoUrl: "https://res.cloudinary.com/dpdhh76ey/video/upload/v1770875293/Promo_uozoq2.mp4",
  title: 'Promo Reel',
  contentType: 'Promotional Content',
  editingStyle: 'Dynamic Transitions + Clean Visual Flow',
  editingSoftware: ['After Effects', 'Premiere Pro']
}
  ],
};
    // --- FUNCTIONS ---

    function smoothScrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            const headerHeight = document.querySelector('.floating-header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight - 30;
            window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
    }

    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;
        const headerHeight = document.querySelector('.floating-header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            if (scrollPosition >= sectionTop) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.getAttribute('id')}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    function createPortfolioItemHTML(item) {
    const itemDataString = JSON.stringify(item).replace(/'/g, "&apos;");

    let clickHandler;
    if (item.mediaType === 'video') {
        clickHandler = `onclick='openVideoPlayer(${itemDataString})'`;
    } else {
        clickHandler = `onclick='openViewer(${itemDataString})'`;
    }

    return `
    <div class="portfolio-card ${item.mediaType === 'video' ? 'video-card' : '-card'} rounded-xl overflow-hidden shadow-lg group">
        <div class="relative w-full overflow-hidden cursor-pointer ${item.aspectRatio}" ${clickHandler}>
            
            ${
                item.mediaType === 'video'
                    ? `
                        <video 
                            src="${item.videoUrl}#t=1"
                            class="portfolio-thumbnail object-cover w-full h-full"
                            preload="metadata"
                            muted
                        ></video>
                    `
                    : `
                        <img 
                            src="${item.thumbnailUrl}"
                            class="portfolio-thumbnail object-cover w-full h-full"
                            alt="${item.title}"
                        >
                    `
            }

            ${
                item.mediaType === 'video'
                    ? `
                        <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span class="p-4 bg-white/20 rounded-full backdrop-blur-sm text-white transition-transform transform group-hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5.14v14l11-7-11-7z"></path>
                                </svg>
                            </span>
                        </div>
                    `
                    : ""
            }
        </div>
    </div>
`;
}
    // --- AUTO VIDEO ORIENTATION DETECTOR ---
function applyVideoOrientation() {
    document.querySelectorAll('.video-card video').forEach(video => {
        const card = video.closest('.video-card');
        if (!card) return;

        const setOrientation = () => {
            if (video.videoHeight > video.videoWidth) {
                card.classList.add('vertical');
                card.classList.remove('horizontal');
            } else {
                card.classList.add('horizontal');
                card.classList.remove('vertical');
            }
        };

        if (video.readyState >= 1) {
            setOrientation();
        } else {
            video.addEventListener('loadedmetadata', setOrientation);
        }
    });
}

function renderMainPortfolio() {
    const container = document.getElementById('portfolio-categories');
    if (!container) return;

    const allVideos = portfolioData['Video Editing'];

    // take 4 shorts and 2 longs for main preview
    const shortForm = allVideos.filter(v => v.aspectRatio === 'ar-vertical').slice(0, 4);
    const longForm  = allVideos.filter(v => v.aspectRatio === 'ar-horizontal').slice(0, 2);

    let html = `
    <div class="mb-20">
        <h3 class="portfolio-main-heading">
            Short-Form High-Impact Content
        </h3>

        <!-- SHORT GRID: 2 columns on small screens, 4 on md+ -->
        <div class="portfolio__preview-grid grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            ${shortForm.map(item => createPortfolioItemHTML(item)).join('')}
        </div>
    </div>

    <div class="mb-20">
        <h3 class="portfolio-main-heading">
            Narrative & Long-Form Content
        </h3>

        <!-- LONG GRID: 1 column on small, 2 on md+ -->
        <div class="portfolio__preview-grid grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
            ${longForm.map(item => createPortfolioItemHTML(item)).join('')}
        </div>
    </div>
    `;

    container.innerHTML = html;

    // re-run orientation detector to set vertical/horizontal classes
    applyVideoOrientation();
}


    // --- Modal Logic ---
window.openPortfolioModal = (initialCategory) => {
    document.querySelector('.floating-header').classList.add('hidden');
    modal.classList.remove('hidden', 'modal-leave-to');
    modal.classList.add('modal-enter-active');
    document.body.style.overflow = 'hidden';

    loadFullContent();

    // Default filter: vertical (short-form)
    setTimeout(() => {
        setupVideoTypeFilters();
        const verticalBtn = document.querySelector('.portfolio-filter-btn[data-type="vertical"]');
        if(verticalBtn) verticalBtn.click();
    }, 150);
};

    function closeModal() {
        document.querySelector('.floating-header').classList.remove('hidden');
        modal.classList.add('modal-leave-to');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('modal-enter-active');
        }, 300);
    }

function setupVideoTypeFilters() {

    const filterButtons = document.querySelectorAll(".portfolio-filter-btn");

    const verticalSection = document.querySelector("#video-editing-vertical-grid")
        ?.closest(".video-category-section");

    const horizontalSection = document.querySelector("#video-editing-horizontal-grid")
        ?.closest(".video-category-section");

    filterButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            // Active UI
            filterButtons.forEach(b => {
                b.classList.remove("active","text-white","border-white");
                b.classList.add("text-gray-400");
            });

            btn.classList.add("active","text-white","border-white");
            btn.classList.remove("text-gray-400");

            const type = btn.dataset.type;

            // ⭐ MAIN LOGIC
            if(type === "all"){
                if(verticalSection) verticalSection.style.display = "block";
                if(horizontalSection) horizontalSection.style.display = "block";
            }

            if(type === "vertical"){
                if(verticalSection) verticalSection.style.display = "block";
                if(horizontalSection) horizontalSection.style.display = "none";
            }

            if(type === "horizontal"){
                if(verticalSection) verticalSection.style.display = "none";
                if(horizontalSection) horizontalSection.style.display = "block";
            }

        });

    });

}

function loadFullContent() {
    const verticalGrid = document.getElementById('video-editing-vertical-grid');
    const horizontalGrid = document.getElementById('video-editing-horizontal-grid');

    if (!verticalGrid || !horizontalGrid) return;

    // Prevent re-rendering if already populated
    if (verticalGrid.innerHTML || horizontalGrid.innerHTML) return;

    const allVideos = portfolioData['Video Editing'];

    // Only vertical & horizontal videos
    const verticalItems = allVideos.filter(item => item.aspectRatio === 'ar-vertical');
    const horizontalItems = allVideos.filter(item => item.aspectRatio === 'ar-horizontal');

    verticalGrid.innerHTML = verticalItems.map(item => createPortfolioItemHTML(item)).join('');
    horizontalGrid.innerHTML = horizontalItems.map(item => createPortfolioItemHTML(item)).join('');

    // ===== Make modal grids match the main page responsive layout =====
    // Short (vertical) grid: 2 columns on small, 4 on md+
    verticalGrid.classList.add('grid', 'grid-cols-2', 'md:grid-cols-4', 'gap-6', 'justify-items-center');

    // Long (horizontal) grid: 1 column on small, 2 on md+
    horizontalGrid.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6', 'justify-items-center');

    // keep modal content centered and limited width
    verticalGrid.style.maxWidth = '1200px';
    verticalGrid.style.margin = '0 auto';
    horizontalGrid.style.maxWidth = '1200px';
    horizontalGrid.style.margin = '0 auto';

    // Re-apply orientation detector to set vertical/horizontal classes on each card
    applyVideoOrientation();
}

    function switchCategory(categoryName) {
        const gridId = categoryName.toLowerCase().replace(/\s/g, '-') + '-grid';
        modalTabsContainer.querySelectorAll('.portfolio-tab').forEach(tab => {
            const isTarget = tab.dataset.category === categoryName;
            tab.classList.toggle('active', isTarget);
            tab.classList.toggle('bg-gray-500/30', isTarget);
            tab.classList.toggle('text-white', isTarget);
            tab.classList.toggle('bg-gray-700/20', !isTarget);
            tab.classList.toggle('text-gray-300', !isTarget);
        });
        
        // Hide all main portfolio grid containers
        modalBody.querySelectorAll('#video-editing-grid').forEach(grid => {
            grid.classList.add('hidden');
        });

        const targetGrid = document.getElementById(gridId);
        if(targetGrid) {
            targetGrid.classList.remove('hidden');
        }
        modalBody.scrollTop = 0;
    }

    
// --- VIDEO PLAYER LOGIC ---
window.openVideoPlayer = (item) => {
    videoTitleModal.textContent = item.title || 'Portfolio Video';
    videoContentTypeModal.textContent = item.contentType || 'N/A';
    videoEditingStyleModal.textContent = item.editingStyle || 'N/A';

    if (item.editingSoftware && item.editingSoftware.length > 0) {
        videoSoftwareModal.innerHTML = item.editingSoftware.map(software => 
            `<span class="software-tag">${software}</span>`
        ).join('');
    } else {
        videoSoftwareModal.innerHTML = '';
    }
    
    // Create player HTML
    let playerHtml = '';
    if (item.videoUrl.includes('youtube.com')) {
        playerHtml = `<iframe src="${item.videoUrl}?autoplay=1&rel=0&modestbranding=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    } else {
        playerHtml = `<video controls autoplay>
                        <source src="${item.videoUrl}" type="video/mp4">
                        Your browser does not support the video tag.
                      </video>`;
    }

    videoPlayerContainer.innerHTML = playerHtml;

    // ⚡ Match the size of the video card on the main page
    let referenceCard = document.querySelector(`.video-card.${item.aspectRatio} video, .video-card.${item.aspectRatio} iframe`);
    
    if(!referenceCard) {
        // fallback if no reference found
        referenceCard = document.querySelector('.video-card video, .video-card iframe');
    }

    if(referenceCard) {
        const rect = referenceCard.getBoundingClientRect();

        videoPlayerContainer.style.width = `${rect.width}px`;
        videoPlayerContainer.style.height = `${rect.height}px`;
    }

    // Ensure media fits container
    const media = videoPlayerContainer.querySelector('video, iframe');
    media.style.width = '100%';
    media.style.height = '100%';
    media.style.objectFit = 'contain'; // keep aspect ratio without cropping

    videoModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        videoModal.classList.remove('opacity-0');
        videoModalContent.classList.remove('scale-95');
    }, 50);
}


function closeVideoPlayer() {
    videoModal.classList.add('opacity-0');
    videoModalContent.classList.add('scale-95');

    setTimeout(() => {
        videoModal.classList.add('hidden');

        // Stop video playback
        videoPlayerContainer.innerHTML = '';

        // Restore scroll ONLY if portfolio modal is not open
        if (!modal.classList.contains('modal-enter-active')) {
            document.body.style.overflow = '';
        }

    }, 300);
}


    // --- STATS COUNTER ANIMATION ---
    const statsSection = document.getElementById('stats');
    const counters = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            let current = 0;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                current = Math.floor(progress * target);
                counter.innerText = current;
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                     counter.innerText = target + '+';
                }
            };
            let start;
            window.requestAnimationFrame(step);
        });
    };

    const statsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    // --- TESTIMONIAL CAROUSEL ---
    function initTestimonialCarousel() {
        const track = document.getElementById('testimonialsTrack');
        if (track && track.children.length > 0) {
            // --- Logic for a smooth, infinite loop ---
            // 1. Get all original testimonial items from the HTML.
            const items = Array.from(track.children);
            
            // 2. Clone each item and append it to the track.
            // This creates a seamless transition. The CSS animation will translate the track
            // by 50% of its new total width (which is the width of the original set).
            // When it reaches the end, the cloned items are perfectly in place to continue the loop.
            items.forEach(item => {
                const clone = item.cloneNode(true);
                track.appendChild(clone);
            });
            // The pause-on-hover effect is handled purely in CSS for efficiency.
        }
    }

    // --- EVENT LISTENERS ---
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    if (homeBtn) {
        homeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollToSection('#home');
        });
    }
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
            smoothScrollToSection(link.getAttribute('href'));
        });
    });
    heroButtons.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            smoothScrollToSection(index === 0 ? '#contact' : '#portfolio');
        });
    });

    if (viewAllPortfolioBtn) {
        viewAllPortfolioBtn.addEventListener('click', () => openPortfolioModal('Video Editing'));
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (closeVideoModalBtn) closeVideoModalBtn.addEventListener('click', closeVideoPlayer);

    window.addEventListener('scroll', updateActiveNavLink);
    
    // --- INITIALIZATION ---
   // --- INITIALIZATION ---
renderMainPortfolio();
applyVideoOrientation(); // <<< CALL THE FUNCTION HERE
updateActiveNavLink();
initTestimonialCarousel(); // Initialize the testimonial carousel logic.

});
