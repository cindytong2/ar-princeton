(function() {
  var BASE_PATH = null;

  // Collect all tag values from the rendered cards
  function getKnownTags() {
    var tags = [];
    document.querySelectorAll('.project-tag').forEach(function(el) {
      var tag = (el.getAttribute('data-tag') || '').toLowerCase();
      if (tag && tags.indexOf(tag) === -1) tags.push(tag);
    });
    return tags;
  }

  // Derive the base path at init time by stripping any known tag from the end.
  // Works regardless of repo name or hosting setup.
  function computeBasePath(knownTags) {
    var path = window.location.pathname
      .replace(/\/$/, '')
      .replace(/\/index\.html$/, '');
    var segments = path.split('/').filter(Boolean);
    if (segments.length > 0) {
      var last = segments[segments.length - 1].toLowerCase();
      if (knownTags.indexOf(last) !== -1) {
        // Last segment is a tag — base is everything before it
        return '/' + segments.slice(0, -1).join('/');
      }
    }
    return path; // e.g. '/ar-princeton' or ''
  }

  function getTagFromPath() {
    var path = window.location.pathname
      .replace(/\/$/, '')
      .replace(/\/index\.html$/, '');
    if (path === BASE_PATH) return null;
    if (path.indexOf(BASE_PATH + '/') === 0) {
      return path.slice(BASE_PATH.length + 1).toLowerCase() || null;
    }
    return null;
  }

  function filterCards(tag) {
    document.querySelectorAll('.project-card').forEach(function(card) {
      if (!tag) {
        card.style.display = '';
      } else {
        var tags = (card.getAttribute('data-tags') || '').toLowerCase().split(',').map(function(t) { return t.trim(); });
        card.style.display = tags.includes(tag) ? '' : 'none';
      }
    });
  }

  function setActiveTag(tag) {
    document.querySelectorAll('.project-tag').forEach(function(el) {
      el.classList.toggle('is-active', el.getAttribute('data-tag') === tag);
    });
  }

  function applyTag(tag, anchorCard) {
    var oldTop = anchorCard ? anchorCard.getBoundingClientRect().top : null;

    try {
      history.pushState(null, '', tag ? BASE_PATH + '/' + tag : BASE_PATH + '/');
    } catch (err) {}

    filterCards(tag);
    setActiveTag(tag);

    if (anchorCard && oldTop !== null) {
      var cardAbsoluteTop = anchorCard.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: cardAbsoluteTop - oldTop, behavior: 'instant' });
    }
  }

  function init() {
    var knownTags = getKnownTags();
    BASE_PATH = computeBasePath(knownTags);

    // Apply filter from URL on page load (e.g. user visits /ar-princeton/spectacles directly)
    var initialTag = getTagFromPath();
    filterCards(initialTag);
    setActiveTag(initialTag);

    document.addEventListener('click', function(e) {
      var tagEl = e.target.closest && e.target.closest('.project-tag');
      if (tagEl) {
        e.preventDefault();
        e.stopPropagation();
        var card = tagEl.closest('.project-card');
        var isActive = tagEl.classList.contains('is-active');
        applyTag(isActive ? null : (tagEl.getAttribute('data-tag') || null), card);
      }
    }, true);

    window.addEventListener('popstate', function() {
      var tag = getTagFromPath();
      filterCards(tag);
      setActiveTag(tag);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
