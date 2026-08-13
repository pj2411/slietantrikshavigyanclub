/* ====================================================================
   SLIET Antriksha Vigyan Club - Application Logic & Starfield Canvas
   ==================================================================== */

// Set Current Date & Year dynamically + Sync Google Form URL from config.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Date & Year
    const dateSpan = document.getElementById('current-date-display');
    if (dateSpan) {
        const now = new Date();
        dateSpan.textContent = now.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
    }
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Automatically sync Google Form URLs from config.js (SEPARATE JOIN VS EVENT FORMS)
    if (window.CLUB_CONFIG) {
        // Sync Membership / Recruitment Form Link
        if (window.CLUB_CONFIG.joinUsFormUrl) {
            const joinButtons = document.querySelectorAll('.join-form-link, #join-modal a');
            joinButtons.forEach(btn => {
                btn.href = window.CLUB_CONFIG.joinUsFormUrl;
            });
        }
        // Sync Specific Event Registration Form Link
        if (window.CLUB_CONFIG.eventFormUrl) {
            const eventButtons = document.querySelectorAll('.event-form-link');
            eventButtons.forEach(btn => {
                btn.href = window.CLUB_CONFIG.eventFormUrl;
            });
        }
    }
});

// Theme Switcher Logic (Default: Light Mode)
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }
}

function toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
}

function updateThemeIcons(isDark) {
    const iconDesktop = document.getElementById('theme-toggle-icon');
    const iconMobile = document.getElementById('theme-toggle-icon-mobile');
    if (isDark) {
        if (iconDesktop) iconDesktop.className = 'fa-solid fa-moon text-sky-300';
        if (iconMobile) iconMobile.className = 'fa-solid fa-moon text-sky-300';
    } else {
        if (iconDesktop) iconDesktop.className = 'fa-solid fa-sun text-amber-500';
        if (iconMobile) iconMobile.className = 'fa-solid fa-sun text-amber-500';
    }
}

initTheme();

// Interactive Canvas Particle Starfield (Adapted for Light & Dark Themes)
const canvas = document.getElementById('space-stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
}

function initStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 3200);
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.8 + 0.4,
            alpha: Math.random() * 0.7 + 0.3,
            speed: Math.random() * 0.35 + 0.08
        });
    }
}

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.classList.contains('dark');
    
    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        
        // Color tuning based on active mode
        if (isDark) {
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * 0.9})`;
        } else {
            // Warm Starlight Amber soft particles on academic observatory background
            ctx.fillStyle = `rgba(217, 119, 6, ${star.alpha * 0.35})`;
        }
        ctx.fill();

        // Gentle upward floating animation
        star.y -= star.speed;
        if (star.y < 0) {
            star.y = canvas.height;
            star.x = Math.random() * canvas.width;
        }
    });
    requestAnimationFrame(animateStars);
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animateStars();

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Modal Controls
function openJoinModal() {
    const modal = document.getElementById('join-modal');
    const form = document.getElementById('membership-form');
    const success = document.getElementById('form-success');
    if (modal) modal.classList.remove('hidden');
    if (form) form.classList.remove('hidden');
    if (success) success.classList.add('hidden');
}

function closeJoinModal() {
    const modal = document.getElementById('join-modal');
    if (modal) modal.classList.add('hidden');
}

function handleFormSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('membership-form');
    const success = document.getElementById('form-success');
    if (form) form.classList.add('hidden');
    if (success) success.classList.remove('hidden');
}

// Event Toggle Tabs
function switchEventTab(tab) {
    const upcomingContainer = document.getElementById('events-upcoming');
    const pastContainer = document.getElementById('events-past');
    const tabUpcoming = document.getElementById('tab-upcoming');
    const tabPast = document.getElementById('tab-past');

    if (tab === 'upcoming') {
        if (upcomingContainer) {
            upcomingContainer.classList.remove('hidden');
            upcomingContainer.classList.add('grid');
        }
        if (pastContainer) {
            pastContainer.classList.add('hidden');
            pastContainer.classList.remove('grid');
        }
        if (tabUpcoming) tabUpcoming.className = "px-5 py-2 rounded-lg text-sm font-semibold transition-all bg-indigo-600 text-white shadow-md";
        if (tabPast) tabPast.className = "px-5 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
    } else {
        if (pastContainer) {
            pastContainer.classList.remove('hidden');
            pastContainer.classList.add('grid');
        }
        if (upcomingContainer) {
            upcomingContainer.classList.add('hidden');
            upcomingContainer.classList.remove('grid');
        }
        if (tabPast) tabPast.className = "px-5 py-2 rounded-lg text-sm font-semibold transition-all bg-indigo-600 text-white shadow-md";
        if (tabUpcoming) tabUpcoming.className = "px-5 py-2 rounded-lg text-sm font-semibold transition-all text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white";
    }
}

// Team Filter Tabs
function filterTeam(category) {
    const cards = document.querySelectorAll('.team-card');
    const buttons = document.querySelectorAll('.team-filter-btn');

    buttons.forEach(btn => {
        btn.className = "team-filter-btn px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all";
    });
    const activeBtn = document.getElementById(`team-btn-${category}`);
    if (activeBtn) {
        activeBtn.className = "team-filter-btn active px-4 py-2 rounded-lg text-xs font-extrabold bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 shadow-md transition-all";
    }

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}
