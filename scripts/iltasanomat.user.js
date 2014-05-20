$(function() {
  // Main body titles
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

