// test suite for satan.js

test("ordinary headline", function() {
  var normal = "Kerrostalo romahti";
  var result = satanify(normal);
  equal(result, "Kerrostalo romahti saatana");
});

test("headline in uppercase", function() {
  var normal = "Kerrostalo ROMAHTI";
  var result = satanify(normal);
  equal(result, "Kerrostalo ROMAHTI SAATANA");
});

test("headline with quote", function() {
  var normal = 'Kerrostalo romahti: "se oli järkyttävää"';
  var result = satanify(normal);
  equal(result, 'Kerrostalo romahti: "se oli järkyttävää saatana"');
});

test("headline with uppercase quote", function() {
  var normal = 'Kerrostalo romahti: "se oli JÄRKYTTÄVÄÄ"';
  var result = satanify(normal);
  equal(result, 'Kerrostalo romahti: "se oli JÄRKYTTÄVÄÄ SAATANA"');
});

test("another headline with quote", function() {
  var normal = '"Pöyristyttävä tunnekuohu"';
  var result = satanify(normal);
  equal(result, '"Pöyristyttävä tunnekuohu saatana"');
});

test("another headline with fancy quote", function() {
  var normal = '”Kahvakiekko on lähtenyt ihan täysin lapasista SM-finaaleissa”';
  var result = satanify(normal);
  equal(result, '”Kahvakiekko on lähtenyt ihan täysin lapasista SM-finaaleissa saatana”');
});

test("headline with exclamation", function() {
  var normal = "Kerrostalo romahti!";
  var result = satanify(normal);
  equal(result, "Kerrostalo romahti saatana!");
});

test("headline with uppercase exclamation", function() {
  var normal = "Kerrostalo ROMAHTI!";
  var result = satanify(normal);
  equal(result, "Kerrostalo ROMAHTI SAATANA!");
});

test("headline with question", function() {
  var normal = "Kerrostalo romahti?";
  var result = satanify(normal);
  equal(result, "Kerrostalo romahti saatana?");
});

test("headline that ends with a number", function() {
  var normal = "Test 123";
  var result = satanify(normal);
  equal(result, "Test 123 saatana");
});

test("headline with quote and exclamation", function() {
  var normal = '"Tämä on mahtavaa!"';
  var result = satanify(normal);
  equal(result, '"Tämä on mahtavaa saatana!"');
});

test("headline with uppercase quote and exclamation", function() {
  var normal = '"Tämä on MAHTAVAA!"';
  var result = satanify(normal);
  equal(result, '"Tämä on MAHTAVAA SAATANA!"');
});

test("empty text", function() {
  var normal = '';
  var result = satanify(normal);
  equal(result, '');
});

test("gibberish", function() {
  var normal = '""""!!???';
  var result = satanify(normal);
  equal(result, '');
});
