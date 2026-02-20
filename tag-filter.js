(function() {
  function getTagFromPath() {
    const path = window.location.pathname;
    if (!path || path === '/' || path.endsWith('/index.html') || path.endsWith('/')) return null;
    const segments = path.split('/').filter(Boolean);
    const lastSegment = segments.length > 0 ? segments[segments.length - 1].toLowerCase() : null;
    if (!lastSegment || lastSegment === 'index.html') return null;
    return lastSegment;
  }

  function filterCards(tag) {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      if (!tag) {
        card.style.display = '';
      } else {
        const tags = (card.getAttribute('data-tags') || '').toLowerCase().split(',').map(t => t.trim());
        card.style.display = tags.includes(tag) ? '' : 'none';
      }
    });
  }

  function handleNavigation() {
    const tag = getTagFromPath();
    filterCards(tag);
  }

  function initTagClicks() {
    // Attach click handlers directly to each tag link
    const tagLinks = document.querySelectorAll('.project-tag');
    tagLinks.forEach(function(tagLink) {
      tagLink.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const tag = this.getAttribute('data-tag');
        if (tag) {
          const newPath = '/' + tag;
          history.pushState(null, '', newPath);
          handleNavigation();
        }
      });
    });
  }

  // Initialize on load
  function init() {
    handleNavigation();
    initTagClicks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  window.addEventListener('popstate', handleNavigation);
})();
