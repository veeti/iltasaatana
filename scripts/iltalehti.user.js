$(function() {
  // Body headings
  $('h1.juttuotsikko span.otsikko:last-of-type').satanify();

  // Left
  $('#container_vasen p a:not(.palstakuva)').satanify(' ');

  // Right
  $('#container_oikea [class$=link-list] p a:not(.palstakuva)').satanify(' ');
  $('#container_oikea .widget a .list-title').satanify();

  // Footer
  $('.footer_luetuimmat_container .list-title').satanify();
});

