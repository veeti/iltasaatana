$(function() {
  // Body headings
  $('h1.juttuotsikko span.otsikko:last-of-type').each(function() {
    // Some of the center title spans on Iltalehti have manual <br /> elements
    // inside of them, which our satanify plugin isn't smart enough to handle
    // yet. Hack around it with this for now.
    var contents = $(this).contents();
    if (contents != null && contents.length > 0) {
      var last = contents.last()[0];
      last.textContent = satanify(last.textContent);
    }
  });

  // Left
  $('#container_vasen p a:not(.palstakuva)').satanify(' ');

  // Right
  $('#container_oikea [class$=link-list] p a:not(.palstakuva)').satanify(' ');
  $('#container_oikea .widget a .list-title').satanify();

  // Footer
  $('.footer_luetuimmat_container .list-title').satanify();
});

