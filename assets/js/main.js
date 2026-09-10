// Main interactive functionality for Gokulan A Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initHeroWordToggle();
  initNavigation();
  initSkillsFilter();
  initPipelineInteractiveFlow();
  initModals();
  initContactForm();
});

// 1. Giant Hero Word Toggle (CREATE -> CODE -> BUILD)
function initHeroWordToggle() {
  const words = ['CREATE', 'CODE', 'BUILD'];
  let currentIndex = 0;
  const wordEl = document.getElementById('giantHeroWord');
  const toggleBtn = document.getElementById('wordToggleBtn');

  if (!wordEl || !toggleBtn) return;

  function setWord(index) {
    wordEl.style.opacity = '0';
    wordEl.style.transform = 'translateY(10px)';
    setTimeout(() => {
      wordEl.textContent = words[index];
      wordEl.style.opacity = '1';
      wordEl.style.transform = 'translateY(0)';
    }, 150);
  }

  toggleBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % words.length;
    setWord(currentIndex);
  });

  wordEl.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % words.length;
    setWord(currentIndex);
  });
}

// 2. Navigation & Drawer
function initNavigation() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const drawer = document.getElementById('navDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const navLinks = document.querySelectorAll('.panel-nav-link, .drawer-nav-link, .scroll-link');

  function openDrawer() {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    hamburgerBtn.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', () => {
      if (drawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        closeDrawer();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// 3. Skills Filtering
function initSkillsFilter() {
  const filterBtns = document.querySelectorAll('.filter-chip');
  const skillCards = document.querySelectorAll('.skill-category-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => { card.style.opacity = '1'; }, 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });
}

// 4. Interactive Pipeline Flow (PRAMAANX)
function initPipelineInteractiveFlow() {
  const steps = document.querySelectorAll('.flow-step-item');
  const detailBox = document.getElementById('pipelineDetailText');

  steps.forEach(step => {
    step.addEventListener('click', () => {
      steps.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      const desc = step.getAttribute('data-desc');
      const title = step.getAttribute('data-title');
      if (detailBox) {
        detailBox.innerHTML = `<strong>Step: ${title}</strong> — ${desc}`;
      }
    });
  });
}

// 5. Project Modals & Resume Viewer
function initModals() {
  const modal = document.getElementById('projectModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalClose = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalBody = document.getElementById('modalBody');

  const resumeModal = document.getElementById('resumeModal');
  const resumeClose = document.getElementById('resumeCloseBtn');
  const openResumeBtns = document.querySelectorAll('.open-resume-btn');

  // Open Project Modal
  document.querySelectorAll('.btn-project-details').forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const project = portfolioData.projects.find(p => p.id === projectId);

      if (project) {
        modalTitle.textContent = project.title;
        modalCategory.textContent = project.category;
        
        let highlightsHtml = '';
        if (project.highlights && project.highlights.length) {
          highlightsHtml = `
            <div style="margin-top: 20px;">
              <h4 style="color: #f97316; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Key Innovations</h4>
              <ul style="padding-left: 20px; color: #cbd5e1; font-size: 0.9rem; line-height: 1.6;">
                ${project.highlights.map(h => `<li style="margin-bottom: 6px;">${h}</li>`).join('')}
              </ul>
            </div>
          `;
        }

        let tagsHtml = `
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px;">
            ${project.tags.map(t => `<span style="font-size: 0.75rem; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 4px 10px; border-radius: 4px;">${t}</span>`).join('')}
          </div>
        `;

        modalBody.innerHTML = `
          <p style="color: #94a3b8; font-size: 0.98rem; line-height: 1.7; margin-bottom: 16px;">${project.description}</p>
          ${highlightsHtml}
          ${tagsHtml}
          ${project.liveUrl ? `<div style="margin-top: 24px;"><a href="${project.liveUrl}" target="_blank" class="cta-pill-button" style="padding: 10px 22px; font-size: 0.8rem; display: inline-flex;">Visit AltusMATE ↗</a></div>` : ''}
        `;

        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modal.classList.remove('open');
    if (resumeModal) resumeModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Resume Modal
  openResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resumeModal) {
        resumeModal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (resumeClose) resumeClose.addEventListener('click', closeModal);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeModal();
    });
  }
}

// 6. Contact Form Submission
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const originalText = btn.innerHTML;

    btn.innerHTML = `<span>Sending Message...</span>`;
    btn.disabled = true;

    setTimeout(() => {
      showToast('Thank you! Your message has been received. Gokulan will reply shortly.');
      form.reset();
      btn.innerHTML = originalText;
      btn.disabled = false;
    }, 1200);
  });
}

// Helper: Toast Notifications
function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
