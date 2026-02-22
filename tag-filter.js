(function() {
  function getBasePath() {
    var segments = window.location.pathname.split('/').filter(Boolean);
    return segments.length >= 1 ? '/' + segments[0] : '';
  }

  var REPO_NAME = 'ar-princeton';

  function getTagFromPath() {
    var path = window.location.pathname;
    var segments = path.split('/').filter(Boolean);
    if (segments.length === 0) return null;
    if (segments.length === 1) {
      if (segments[0].toLowerCase() === REPO_NAME) return null;
      return segments[0].toLowerCase();
    }
    var lastSegment = segments[segments.length - 1].toLowerCase();
    if (lastSegment === 'index.html') return null;
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
          var base = getBasePath();
          var newPath = base + (base ? '/' : '') + tag;
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
