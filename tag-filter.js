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

  function applyTag(tag, anchorCard) {
    var oldTop = anchorCard ? anchorCard.getBoundingClientRect().top : null;

    filterCards(tag);
    setActiveTag(tag);

    if (anchorCard && oldTop !== null) {
      // Reading getBoundingClientRect() forces a synchronous reflow so
      // we get the post-filter layout. scrollTo then fires before any paint,
      // meaning there is no visible jump — no rAF needed.
      var cardAbsoluteTop = anchorCard.getBoundingClientRect().top + window.scrollY;
      window.scrollTo(0, cardAbsoluteTop - oldTop);
    }
  }

  function init() {
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
