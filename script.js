/**
 * Podcast website — transcript tabs and smooth behavior
 */

document.addEventListener('DOMContentLoaded', function () {
  const transcriptBtns = document.querySelectorAll('.transcript-btn');
  const transcriptPanels = document.querySelectorAll('.transcript-panel');

  function switchTranscript(part) {
    const partNum = String(part);

    transcriptBtns.forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-part') === partNum);
    });

    transcriptPanels.forEach(function (panel) {
      panel.classList.toggle('active', panel.getAttribute('data-part') === partNum);
    });
  }

  transcriptBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const part = this.getAttribute('data-part');
      if (part) switchTranscript(part);
    });
  });
});
