const summaryElements = document.querySelectorAll('summary');

summaryElements.forEach(function(summaryElement) {
  summaryElement.addEventListener('click', function() {
    if (summaryElement.classList.contains('rotated')) {
      summaryElement.style.fontWeight = "400";
    } else {
      summaryElement.style.fontWeight = "700";
    }
    summaryElement.classList.toggle('rotated');
  });
});
