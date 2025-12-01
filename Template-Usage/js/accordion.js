(function () {
    // === CONFIGURATION ===
    const triggerClass = 'oc-accordion-trigger';
    const contentClass = 'oc-accordion-content';
    const openClass = 'oc-open';
    const closedClass = 'oc-closed';
    const cookieName = 'ff-oc-accordionState';

    // Global shared state
    let accordionState = {};

    // === COOKIE HANDLING ===
    function setCookie(name, value, days = 90) {
        const expires = new Date(Date.now() + days * 864e5).toUTCString();
        document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
    }

    function getCookie(name) {
        return document.cookie.split('; ').reduce((r, v) => {
            const parts = v.split('=');
            return parts[0] === name ? decodeURIComponent(parts[1]) : r;
        }, '');
    }

    function saveState() {
        setCookie(cookieName, JSON.stringify(accordionState));
    } // ← FIXED MISSING BRACE

    function loadState() {
        try {
            const cookieValue = getCookie(cookieName);
            return JSON.parse(cookieValue || '{}');
        } catch (e) {
            console.error('Error parsing accordion cookie:', e);
            return {};
        }
    }

    // === OPEN ALL / CLOSE ALL FUNCTIONS ===
    function toggleAllAccordions(open) {
        const triggers = document.querySelectorAll(`.${triggerClass}`);

        triggers.forEach(trigger => {
            const selector = trigger.getAttribute('data-selector');
            const content = selector ? document.querySelector(selector) : null;
            if (!content) return;

            const id = trigger.id;

            if (open) {
                trigger.classList.add(openClass);
                trigger.classList.remove(closedClass);
                content.classList.add(openClass);
                content.classList.remove(closedClass);
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.overflow = 'hidden';
                accordionState[id] = 'open';
            } else {
                trigger.classList.add(closedClass);
                trigger.classList.remove(openClass);
                content.classList.add(closedClass);
                content.classList.remove(openClass);
                content.style.maxHeight = '0px';
                content.style.overflow = 'hidden';
                accordionState[id] = 'closed';
            }
        });

        saveState();
    }

    // === INIT FUNCTION ===
    function initAccordion() {
        const triggers = document.querySelectorAll(`.${triggerClass}`);

        // Load cookie into global state
        accordionState = loadState();

        triggers.forEach((trigger, index) => {
            const selector = trigger.getAttribute('data-selector');
            const content = selector ? document.querySelector(selector) : null;
            if (!content || !content.classList.contains(contentClass)) return;

            const id = trigger.id || `accordion-${index}`;
            trigger.id = id;

            // Restore saved state if available
            const saved = accordionState[id];
            if (saved === 'open' || saved === 'closed') {
                trigger.classList.remove(openClass, closedClass);
                content.classList.remove(openClass, closedClass);

                if (saved === 'open') {
                    trigger.classList.add(openClass);
                    content.classList.add(openClass);
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    trigger.classList.add(closedClass);
                    content.classList.add(closedClass);
                    content.style.maxHeight = '0px';
                }
                content.style.overflow = 'hidden';
            }

            // Individual click handler
            trigger.addEventListener('click', () => {
                const isOpen = content.classList.contains(openClass);

                if (isOpen) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                    requestAnimationFrame(() => {
                        content.style.maxHeight = '0px';
                    });
                } else {
                    content.style.maxHeight = content.scrollHeight + 'px';
                }

                trigger.classList.toggle(openClass, !isOpen);
                trigger.classList.toggle(closedClass, isOpen);
                content.classList.toggle(openClass, !isOpen);
                content.classList.toggle(closedClass, isOpen);

                accordionState[id] = isOpen ? 'closed' : 'open';
                saveState();
            });
        });

        // Add Open All / Close All handlers
        const openAllButton = document.getElementById('oc-open-all');
        const closeAllButton = document.getElementById('oc-close-all');

        if (openAllButton) {
            openAllButton.addEventListener('click', () => toggleAllAccordions(true));
        }

        if (closeAllButton) {
            closeAllButton.addEventListener('click', () => toggleAllAccordions(false));
        }
    }

    // Expose globally
    window.initAccordion = initAccordion;
})();
