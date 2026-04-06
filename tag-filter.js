(function() {
  function getBasePath() {
    var segments = window.location.pathname.split('/').filter(Boolean);
    return segments.length >= 1 ? '/' + segments[0] : '';
  }

  var REPO_NAME = 'ar-princeton-copy';

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

  function setActiveTag(tag) {
    document.querySelectorAll('.project-tag').forEach(function(el) {
      el.classList.toggle('is-active', el.getAttribute('data-tag') === tag);
    });
  }

  function updateResetBar(tag) {
    var bar = document.getElementById('filter-reset-bar');
    var label = document.getElementById('filter-active-label');
    if (!bar) return;
    if (tag) {
      bar.classList.add('is-visible');
      if (label) label.textContent = tag;
    } else {
      bar.classList.remove('is-visible');
      if (label) label.textContent = '';
    }
  }

  // tag may be passed directly (from click) or derived from URL (from popstate)
  function handleNavigation(forcedTag) {
    var tag = (forcedTag !== undefined) ? forcedTag : getTagFromPath();
    filterCards(tag);
    setActiveTag(tag);
    updateResetBar(tag);
  }

  function applyTag(tag, anchorCard) {
    // Record the card's position relative to the viewport before filtering
    var cardTop = anchorCard ? anchorCard.getBoundingClientRect().top : null;

    if (tag) {
      try {
        var base = getBasePath();
        var newPath = base + (base ? '/' : '') + tag;
        history.pushState(null, '', newPath);
      } catch (err) {}
    } else {
      try {
        var base = getBasePath();
        history.pushState(null, '', base || '/');
      } catch (err) {}
    }
    handleNavigation(tag);

    // Restore the card to the same viewport position it was at before filtering
    if (anchorCard && cardTop !== null) {
      var newCardTop = anchorCard.getBoundingClientRect().top;
      window.scrollBy(0, newCardTop - cardTop);
    }
  }

  function init() {
    handleNavigation();

    // Use capture phase so this fires before the teleport accordion handler,
    // which would otherwise swallow clicks on tags inside accordion containers.
    document.addEventListener('click', function(e) {
      if (e.target.closest && e.target.closest('.project-tag-clear')) {
        e.preventDefault();
        e.stopPropagation();
        var card = e.target.closest('.project-card');
        applyTag(null, card);
        return;
      }
      var tagEl = e.target.closest && e.target.closest('.project-tag');
      if (tagEl) {
        e.preventDefault();
        e.stopPropagation();
        var card = tagEl.closest('.project-card');
        applyTag(tagEl.getAttribute('data-tag') || null, card);
        return;
      }
    }, true); // capture: true
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.addEventListener('popstate', function() { handleNavigation(); });
})();
