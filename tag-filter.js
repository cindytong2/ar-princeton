(function() {
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

  function applyTag(tag) {
    filterCards(tag);
    setActiveTag(tag);
  }

  function init() {
    document.addEventListener('click', function(e) {
      var tagEl = e.target.closest && e.target.closest('.project-tag');
      if (tagEl) {
        e.preventDefault();
        e.stopPropagation();
        var isActive = tagEl.classList.contains('is-active');
        applyTag(isActive ? null : (tagEl.getAttribute('data-tag') || null));
      }
    }, true);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
