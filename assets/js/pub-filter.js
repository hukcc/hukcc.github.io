(function() {
  var filterRole = 'all', filterStatus = 'all', filterTopic = 'all';

  function showHide() {
    document.querySelectorAll('.pub-item').forEach(function(el) {
      var first = el.getAttribute('data-first-author');
      var status = el.getAttribute('data-status');
      var topic = (el.getAttribute('data-topic') || '').split(/\s+/);

      var matchRole = filterRole === 'all' ||
        (filterRole === 'first' && first === 'true') ||
        (filterRole === 'co' && first === 'false');
      var matchStatus = filterStatus === 'all' || status === filterStatus;
      var matchTopic = filterTopic === 'all' || topic.indexOf(filterTopic) !== -1;

      el.style.display = (matchRole && matchStatus && matchTopic) ? '' : 'none';
    });
  }

  function onChange() {
    var roleEl = document.getElementById('pub-filter-role');
    var statusEl = document.getElementById('pub-filter-status');
    var topicEl = document.getElementById('pub-filter-topic');
    if (roleEl) filterRole = roleEl.value;
    if (statusEl) filterStatus = statusEl.value;
    if (topicEl) filterTopic = topicEl.value;
    showHide();
  }

  var roleEl = document.getElementById('pub-filter-role');
  var statusEl = document.getElementById('pub-filter-status');
  var topicEl = document.getElementById('pub-filter-topic');
  if (roleEl) roleEl.addEventListener('change', onChange);
  if (statusEl) statusEl.addEventListener('change', onChange);
  if (topicEl) topicEl.addEventListener('change', onChange);
})();
