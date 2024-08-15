document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault(); // Disable right-click on images
    }
  });

  document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
      e.preventDefault(); // Prevent image dragging
    }
  });

















