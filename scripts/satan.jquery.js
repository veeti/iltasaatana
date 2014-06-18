$(function() {
  $.fn.satanify = function(suffix) {
    var suffix = suffix || '';

    $(this).each(function() {
      $(this).contents().each(function() {
        if (this.nodeType == Node.TEXT_NODE && !this.hasChildNodes() && this.textContent.trim().length > 0) {
          this.textContent = satanify(this.textContent) + suffix;
          return false;
        }
      });
    });
  };
});

