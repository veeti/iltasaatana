$(function() {
  /**
   * A method for satanifying Ilta-Sanomat headings that are manually split across
   * multiple lines.
   */
  $.fn.satanifyFitted = function() {
    $(this).each(function() {
      // Get the last row.
      var last = $('span:last', this);
      var original = $(last).text().trim();
      var satanified = satanify(original);

      // Split into the part before the saatana and the one after to account for
      // punctuation, capitalization, etc.
      var first = 0;
      while (original[first] == satanified[first] && first < satanified.length) {
        first++;
      }
      var one = satanified.slice(0, first);
      var two = satanified.slice(first);

      // Update and append new header.
      $(last).text(one);
      $(this).append($('<span />').addClass($(last).attr('class')).text(two));
    });
  };

  // Main body titles
  $('[id^=fitted-heading-] a').satanifyFitted();
  $('a h2, a h3, h2 a, h3 a').satanify();
  $('#main ul.link-list a').satanify();

  // Surveys
  $('[class^=quick-survey] h3, a.survey-button').satanify();

  // Breaking news
  $('[id^=breakingNewsItem] a').satanify();

  // Sidebar most read
  $('h2.currentlyread').satanify();
  $('[id^=mostRead_] .numberbullet-list li a').satanify(' ');

  // Sidebar latest
  $('[id^=latestArticles-] h2:first').satanify();

  // Sidebar most commented
  $('.most-commented-text').satanify(' ');

  // Generic sidebar link lists
  $('[id^=configLinkList] li a, [id^=latestArticles] li a').satanify(' ');

  // Individual news page titles
  $('#content #main h1:first').satanify();
});

