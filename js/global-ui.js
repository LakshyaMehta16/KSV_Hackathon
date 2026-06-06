// global-ui.js
// Handles generic interactions for the VendorBridge prototype

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Intercept all href="#" links
    const emptyLinks = document.querySelectorAll('a[href="#"]');
    emptyLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showGlobalToast('Feature coming soon!', 'info');
        });
    });

    // 2. Intercept Topbar action buttons
    const iconBtns = document.querySelectorAll('.icon-btn');
    iconBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const label = btn.getAttribute('aria-label') || 'Action';
            showGlobalToast(`${label} panel coming soon!`, 'info');
        });
    });

    // 3. Intercept forms (except those with custom handlers)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Only attach generic handler if no custom onsubmit is defined in HTML
        if (!form.getAttribute('onsubmit') && !form.classList.contains('no-global-submit')) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                showGlobalToast('Action completed successfully!', 'success');
                
                // If form is inside a modal, try to close the modal
                const modal = form.closest('.modal-overlay');
                if (modal) {
                    modal.classList.remove('open');
                }
            });
        }
    });

    // 4. Create a global toast container if it doesn't exist
    let toast = document.getElementById('toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.id = 'toast-notification';
        toast.setAttribute('role', 'alert');
        toast.setAttribute('aria-live', 'assertive');
        toast.innerHTML = `
            <span class="material-symbols-outlined" id="toast-icon" style="font-size:20px;">check_circle</span>
            <span id="toast-message">Done.</span>
        `;
        document.body.appendChild(toast);
    }
});

// Global toast function that can be called from anywhere
window.showGlobalToast = function(message, type = '', iconName = '') {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    
    const msgEl = document.getElementById('toast-message');
    const iconEl = document.getElementById('toast-icon');
    
    msgEl.textContent = message;
    
    // Set icon based on type if not explicitly provided
    if (!iconName) {
        if (type === 'success') iconName = 'check_circle';
        else if (type === 'error') iconName = 'error';
        else if (type === 'warning') iconName = 'warning';
        else iconName = 'info';
    }
    iconEl.textContent = iconName;
    
    // Reset classes
    toast.className = 'toast';
    if (type === 'error') {
        toast.style.borderLeft = '4px solid var(--error, #DC2626)';
        iconEl.style.color = 'var(--error, #DC2626)';
    } else if (type === 'warning') {
        toast.style.borderLeft = '4px solid #D97706';
        iconEl.style.color = '#D97706';
    } else {
        toast.style.borderLeft = '4px solid var(--success, #16A34A)';
        iconEl.style.color = 'var(--success, #16A34A)';
    }
    
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
};

// Global search function to filter elements with class 'searchable'
window.globalSearch = function(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.searchable').forEach(el => {
    if (el.textContent.toLowerCase().includes(q)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });
};

// Also patch any existing showToast function to use our global one
window.showToast = window.showGlobalToast;