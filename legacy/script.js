/**
 * PNP Industrial Solutions - Main JavaScript
 * Pure Vanilla JS, zero external frameworks
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle & Accordion Dropdowns
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const dropdownItems = document.querySelectorAll('.dropdown-item');
  const dropdownNavItems = document.querySelectorAll('.nav-item.has-dropdown');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      
      // Animate hamburger to X
      const bars = navToggle.querySelectorAll('.bar');
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
      }
    });

    // Handle Dropdown Hover and Mobile Accordion Clicks
    dropdownNavItems.forEach(item => {
      // Desktop hover resilience
      item.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
          item.classList.add('dropdown-open');
        }
      });
      item.addEventListener('mouseleave', () => {
        if (window.innerWidth > 768) {
          item.classList.remove('dropdown-open');
        }
      });

      const trigger = item.querySelector('.nav-link');
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            // Prevent instant jump if submenu exists, toggle accordion
            e.preventDefault();
            const wasOpen = item.classList.contains('is-open');
            // Close other accordions
            dropdownNavItems.forEach(other => other.classList.remove('is-open'));
            if (!wasOpen) {
              item.classList.add('is-open');
            }
          }
        });
      }
    });

    // Close menu when a destination link is clicked
    const closeMobileMenu = () => {
      navMenu.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      dropdownNavItems.forEach(item => item.classList.remove('is-open'));
      const bars = navToggle.querySelectorAll('.bar');
      bars[0].style.transform = 'none';
      bars[1].style.opacity = '1';
      bars[2].style.transform = 'none';
    };

    // Submenu links close mobile menu
    dropdownItems.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    const megaLinks = document.querySelectorAll('.mega-link');
    megaLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Top links without dropdown close mobile menu
    navLinks.forEach(link => {
      const parent = link.closest('.has-dropdown');
      if (!parent) {
        link.addEventListener('click', closeMobileMenu);
      }
    });

    // Auto-clean mobile drawer & accordion state when switching or resizing to desktop view
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        closeMobileMenu();
      }
    });
  }

  // 1.1 Sticky Header Scroll Effect (Dynamic Shrink & Frosted Glass)
  const mainHeader = document.getElementById('mainHeader');
  if (mainHeader) {
    let ticking = false;
    const handleScroll = () => {
      if (window.scrollY > 30) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
      ticking = false;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    }, { passive: true });

    // Initial check on page load
    handleScroll();
  }

  // 2. Hero Slider Navigation
  const sliderDots = document.querySelectorAll('.slider-dot');
  const heroSlides = document.querySelectorAll('.hero-slide');
  let currentSlide = 1;
  const totalSlides = sliderDots.length || 3;
  let heroSlideInterval = null;

  const setSlide = (slideIndex) => {
    currentSlide = slideIndex;
    
    // Update active dot
    sliderDots.forEach(dot => {
      const dotSlide = parseInt(dot.getAttribute('data-slide'), 10);
      if (dotSlide === slideIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update active background slide with smooth crossfade
    heroSlides.forEach((slide, idx) => {
      if (idx + 1 === slideIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  };

  const startHeroTimer = () => {
    if (heroSlideInterval) clearInterval(heroSlideInterval);
    heroSlideInterval = setInterval(() => {
      let nextSlide = currentSlide + 1;
      if (nextSlide > totalSlides) nextSlide = 1;
      setSlide(nextSlide);
    }, 5500);
  };

  sliderDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideNum = parseInt(dot.getAttribute('data-slide'), 10);
      setSlide(slideNum);
      startHeroTimer(); // restart auto-timer after user interaction
    });
  });

  // Start auto-advancing slides
  startHeroTimer();

  // 3. Media Carousel Controls
  const mediaCarousel = document.getElementById('mediaCarousel') || document.getElementById('mediaCardsRow');
  const mediaPrevBtn = document.getElementById('mediaPrevBtn');
  const mediaNextBtn = document.getElementById('mediaNextBtn');

  if (mediaCarousel && mediaPrevBtn && mediaNextBtn) {
    mediaNextBtn.addEventListener('click', () => {
      mediaCarousel.scrollBy({ left: 280, behavior: 'smooth' });
    });

    mediaPrevBtn.addEventListener('click', () => {
      mediaCarousel.scrollBy({ left: -280, behavior: 'smooth' });
    });
  }

  // 4. Video Modal Handling (YouTube Integrated)
  const videoModal = document.getElementById('videoModal');
  const closeVideoModal = document.getElementById('closeVideoModal');
  const playStoryBtn = document.getElementById('playStoryBtn');
  const playBuildingVideo = document.getElementById('playBuildingVideo');
  const videoModalTitle = document.getElementById('videoModalTitle');
  const videoIframe = document.getElementById('videoIframe');

  // Authentic Factory Tour Video (PNP Polymers Bhilad Plant)
  const PNP_YOUTUBE_EMBED = 'https://www.youtube-nocookie.com/embed/z4NXpOF_hn4?autoplay=1&rel=0';

  const openVideo = (title) => {
    if (videoModalTitle) videoModalTitle.textContent = title;
    if (videoIframe) {
      videoIframe.src = PNP_YOUTUBE_EMBED;
    }
    if (videoModal) {
      videoModal.classList.add('active');
      videoModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeVideo = () => {
    if (videoIframe) {
      videoIframe.src = '';
    }
    if (videoModal) {
      videoModal.classList.remove('active');
      videoModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (playStoryBtn) {
    playStoryBtn.addEventListener('click', () => {
      openVideo('NYTEX Nylon 6 Yarn Manufacturing | Factory Tour of PNP Polymers, Bhilad');
    });
  }

  const playBuildingVideoAbout = document.getElementById('playBuildingVideoAbout');

  if (playBuildingVideo) {
    playBuildingVideo.addEventListener('click', () => {
      openVideo('NYTEX Factory & Infrastructure Tour | Bhilad Plant');
    });
  }

  if (playBuildingVideoAbout) {
    playBuildingVideoAbout.addEventListener('click', () => {
      openVideo('Corporate Infrastructure & Bhilad Plant Tour | PNP Polytex');
    });
  }

  if (closeVideoModal) {
    closeVideoModal.addEventListener('click', closeVideo);
  }

  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        closeVideo();
      }
    });
  }

  // 5. Enquiry Modal Handling
  const enquiryModal = document.getElementById('enquiryModal');
  const openEnquireModal = document.getElementById('openEnquireModal');
  const openDealerLogin = document.getElementById('openDealerLogin');
  const openDownloadsLink = document.getElementById('openDownloadsLink');
  const closeEnquiryModal = document.getElementById('closeEnquiryModal');
  const getInTouchBtns = document.querySelectorAll('a[href="#enquire"]');
  const interestSelect = document.getElementById('interestCategory');

  const openEnquiry = (e, category = '') => {
    if (e && e.preventDefault) e.preventDefault();
    const query = category ? `?division=${encodeURIComponent(category)}` : '';
    window.location.href = `enquiry.html${query}`;
  };

  const closeEnquiry = () => {
    if (enquiryModal) {
      enquiryModal.classList.remove('active');
      enquiryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  // Synwood 21 Catalogues Modal
  const synwoodModal = document.getElementById('synwoodModal');
  const openSynwoodModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (synwoodModal) {
      synwoodModal.classList.add('active');
      synwoodModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeSynwoodModal = () => {
    if (synwoodModal) {
      synwoodModal.classList.remove('active');
      synwoodModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  // Expose to window for inline onclick handlers across pages
  window.openEnquiry = openEnquiry;
  window.closeEnquiry = closeEnquiry;
  window.openVideo = openVideo;
  window.closeVideo = closeVideo;
  window.openSynwoodModal = openSynwoodModal;
  window.closeSynwoodModal = closeSynwoodModal;

  if (openEnquireModal) {
    openEnquireModal.addEventListener('click', (e) => openEnquiry(e));
  }

  if (openDealerLogin) {
    openDealerLogin.addEventListener('click', (e) => openEnquiry(e, 'dealer'));
  }

  getInTouchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => openEnquiry(e));
  });

  if (closeEnquiryModal) {
    closeEnquiryModal.addEventListener('click', closeEnquiry);
  }

  if (enquiryModal) {
    enquiryModal.addEventListener('click', (e) => {
      if (e.target === enquiryModal) {
        closeEnquiry();
      }
    });
  }

  const closeSynwoodModalBtn = document.getElementById('closeSynwoodModal');
  if (closeSynwoodModalBtn) {
    closeSynwoodModalBtn.addEventListener('click', closeSynwoodModal);
  }

  if (synwoodModal) {
    synwoodModal.addEventListener('click', (e) => {
      if (e.target === synwoodModal) {
        closeSynwoodModal();
      }
    });
  }

  // Global Escape key to dismiss any open modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeVideo();
      closeEnquiry();
      closeSynwoodModal();
    }
  });

  // Synwood filter buttons
  const synwoodFilterBtns = document.querySelectorAll('.synwood-filter-btn');
  const synwoodItems = document.querySelectorAll('.synwood-dl-item');
  synwoodFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      synwoodFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter') || 'all';
      synwoodItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Trading Division Switcher Tabs
  const divisionTabBtns = document.querySelectorAll('.division-tab-btn');
  const divisionViews = document.querySelectorAll('.division-view-panel');
  divisionTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      divisionTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetView = btn.getAttribute('data-target');
      divisionViews.forEach(view => {
        if (view.id === targetView) {
          view.style.display = 'block';
        } else {
          view.style.display = 'none';
        }
      });
    });
  });

  // Close modals on clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target === videoModal) closeVideo();
    if (e.target === enquiryModal) closeEnquiry();
    if (e.target === synwoodModal) closeSynwoodModal();
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideo();
      closeEnquiry();
      closeSynwoodModal();
    }
  });

  // 6. Navigation Active Indicator (Multi-Page & Scrollspy)
  const currentPath = window.location.pathname.toLowerCase();
  const filename = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';

  if (filename === 'index.html' || filename === '') {
    const sections = document.querySelectorAll('section[id]');
    window.addEventListener('scroll', () => {
      const scrollY = window.pageYOffset;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute('id');
        const targetNav = document.querySelector(`.nav-links a[href='#${sectionId}']`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          if (targetNav) targetNav.classList.add('active');
        }
      });
    });
  } else {
    // Inner page active indicator
    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = (link.getAttribute('href') || '').toLowerCase();
      if (href.startsWith(filename)) {
        link.classList.add('active');
      }
    });
  }

  // 7. Global Smooth Scroll & In-Page Navigation
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href') || '';

    // Mail and phone links work naturally
    if (href.startsWith('mailto:') || href.startsWith('tel:')) return;

    // PDF files, Google Drive links, and Baginnov website should open normally
    if (href.toLowerCase().endsWith('.pdf') || href.includes('drive.google.com') || href.includes('baginnov.in')) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      return;
    }

    // Never allow internal page links to open in a new tab or window
    if (link.getAttribute('target') && !href.startsWith('http')) {
      link.removeAttribute('target');
    }

    // Enquiry & modal triggers
    if (href === '#enquire' || href === '#dealer' || href === '#careers' || href === '#downloads') {
      e.preventDefault();
      const catMap = {
        '#dealer': 'dealer',
        '#downloads': 'downloads',
        '#careers': 'export'
      };
      openEnquiry(e, catMap[href] || '');
      return;
    }

    if (href === '#synwood-catalogues' || link.classList.contains('open-synwood-btn')) {
      e.preventDefault();
      openSynwoodModal(e);
      return;
    }

    // Video modal trigger (YouTube links / media buttons)
    if (href.includes('youtube.com') || link.classList.contains('btn-youtube')) {
      e.preventDefault();
      openVideo();
      return;
    }

    // Top / Home navigation
    if (href === '#' || href === '#home') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Anchor navigation to internal sections
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetEl = document.querySelector(href);
      if (targetEl) {
        const headerOffset = 80;
        const elPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elPos - headerOffset,
          behavior: 'smooth'
        });
      } else if (href === '#privacy' || href === '#terms' || href === '#sitemap') {
        openEnquiry(e, 'downloads');
      }
      return;
    }

    // HTML multi-page navigation links (e.g. manufacturing.html, trading.html, retail.html, downloads.html, contact.html)
    if (href.endsWith('.html') || href.includes('.html#')) {
      return; // Allow direct navigation to HTML pages
    }

    // Prevent any other unrecognized page navigation
    e.preventDefault();
  });

  // 12. 3D Coverflow Perspective Carousel (Our 5 Market-Leading Own Brands)
  initBrandCoverflow();
});

function initBrandCoverflow() {
  const container = document.getElementById('brandCoverflow');
  if (!container) return;

  const stage = container.querySelector('.coverflow-stage');
  const cards = Array.from(container.querySelectorAll('.coverflow-card'));
  const prevBtn = document.getElementById('coverflowPrev');
  const nextBtn = document.getElementById('coverflowNext');
  const dots = Array.from(container.querySelectorAll('.coverflow-dot'));
  const total = cards.length;
  if (total === 0) return;

  let currentIndex = 0;
  let autoplayTimer = null;
  let isInteracting = false;

  function updatePositions() {
    cards.forEach((card, i) => {
      let diff = (i - currentIndex) % total;
      if (diff < -Math.floor(total / 2)) diff += total;
      if (diff > Math.floor(total / 2)) diff -= total;

      card.setAttribute('data-pos', diff.toString());
      if (diff === 0) {
        card.setAttribute('aria-hidden', 'false');
        card.classList.add('is-active');
      } else {
        card.setAttribute('aria-hidden', 'true');
        card.classList.remove('is-active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add('active');
        dot.setAttribute('aria-selected', 'true');
      } else {
        dot.classList.remove('active');
        dot.setAttribute('aria-selected', 'false');
      }
    });
  }

  function goToIndex(index) {
    currentIndex = ((index % total) + total) % total;
    updatePositions();
  }

  function nextSlide() {
    goToIndex(currentIndex + 1);
  }

  function prevSlide() {
    goToIndex(currentIndex - 1);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
      resetAutoplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
      resetAutoplay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        goToIndex(idx);
        resetAutoplay();
      }
    });
  });

  // Click on side card brings it to center
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      const pos = parseInt(card.getAttribute('data-pos'), 10);
      if (pos !== 0) {
        e.preventDefault();
        e.stopPropagation();
        const idx = parseInt(card.getAttribute('data-index'), 10);
        goToIndex(idx);
        resetAutoplay();
      }
    });
  });

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    const rect = container.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom > 0;
    if (!isInView) return;

    if (e.key === 'ArrowLeft') {
      prevSlide();
      resetAutoplay();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
      resetAutoplay();
    }
  });

  // Touch and Mouse Drag / Swipe
  let startX = 0;
  let currentX = 0;
  let isDragging = false;

  function onPointerDown(e) {
    // If clicking a link/button inside the active card, allow native click
    if (e.target.closest('a') || e.target.closest('button')) {
      return;
    }
    isDragging = true;
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    currentX = startX;
    stopAutoplay();
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
  }

  function onPointerUp() {
    if (!isDragging) return;
    isDragging = false;
    const deltaX = currentX - startX;
    const threshold = 40;
    if (deltaX > threshold) {
      prevSlide();
    } else if (deltaX < -threshold) {
      nextSlide();
    }
    resetAutoplay();
  }

  if (stage) {
    stage.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    stage.addEventListener('touchstart', onPointerDown, { passive: true });
    stage.addEventListener('touchmove', onPointerMove, { passive: true });
    stage.addEventListener('touchend', onPointerUp, { passive: true });
  }

  function startAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    autoplayTimer = setInterval(() => {
      if (!isInteracting) {
        nextSlide();
      }
    }, 5000);
  }

  function stopAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  container.addEventListener('mouseenter', () => {
    isInteracting = true;
    stopAutoplay();
  });

  container.addEventListener('mouseleave', () => {
    isInteracting = false;
    startAutoplay();
  });

  // Initialize positions
  updatePositions();
  startAutoplay();
}

/* ----------------------------------------------------
   24 PRODUCT CATEGORIES MATRIX TABBED SHOWCASE
   ---------------------------------------------------- */
let currentCategoryTab = 'travel';

function switchCategoryTab(tabCategory) {
  currentCategoryTab = tabCategory;
  
  // Update Tab Buttons Active State
  const tabBtns = document.querySelectorAll('.matrix-tab-btn');
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabCategory) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  const grid = document.getElementById('categories24Grid');
  if (grid) {
    if (tabCategory === 'all') {
      grid.classList.add('show-all-grid');
    } else {
      grid.classList.remove('show-all-grid');
    }
  }

  // Clear search input on tab switch
  const input = document.getElementById('categorySearchInput');
  if (input) input.value = '';

  const tiles = document.querySelectorAll('.categories-24-grid .category-tile');
  let visibleCount = 0;

  tiles.forEach(tile => {
    const cat = tile.getAttribute('data-category');
    if (tabCategory === 'all' || cat === tabCategory) {
      tile.style.display = 'flex';
      visibleCount++;
    } else {
      tile.style.display = 'none';
    }
  });

  const countEl = document.getElementById('visibleCategoryCount');
  if (countEl) countEl.innerText = visibleCount;
}

function filterCategoriesMatrix() {
  const input = document.getElementById('categorySearchInput');
  if (!input) return;
  const filter = input.value.toLowerCase().trim();
  const tiles = document.querySelectorAll('.categories-24-grid .category-tile');
  let visibleCount = 0;

  // Deactivate specific tabs when searching across all items
  if (filter.length > 0) {
    document.querySelectorAll('.matrix-tab-btn').forEach(btn => btn.classList.remove('active'));
    const grid = document.getElementById('categories24Grid');
    if (grid) grid.classList.add('show-all-grid');
  }

  tiles.forEach(tile => {
    const text = tile.innerText.toLowerCase();
    if (!filter || text.includes(filter)) {
      tile.style.display = 'flex';
      visibleCount++;
    } else {
      tile.style.display = 'none';
    }
  });

  const countEl = document.getElementById('visibleCategoryCount');
  if (countEl) {
    countEl.innerText = visibleCount;
  }
}

// Auto Initialize Default Tab
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.matrix-tabs-wrapper')) {
    switchCategoryTab('travel');
  }
});

/* ----------------------------------------------------
   3 BUSINESS DIVISIONS TAB SWITCHER
   ---------------------------------------------------- */
function switchDivisionTab(targetDivision) {
  const tabBtns = document.querySelectorAll('.division-tab-btn');
  tabBtns.forEach(btn => {
    if (btn.getAttribute('data-division') === targetDivision) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });

  const panels = document.querySelectorAll('.division-panel');
  panels.forEach(panel => {
    const divPanel = panel.getAttribute('data-division-panel');
    if (targetDivision === 'all' || divPanel === targetDivision) {
      panel.style.display = 'flex';
      panel.style.opacity = '1';
    } else {
      panel.style.display = 'none';
      panel.style.opacity = '0';
    }
  });
}




