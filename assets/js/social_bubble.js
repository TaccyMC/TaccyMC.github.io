var i = 0;
$(document).ready(function() {
  $('#thumb-speech').text('"I\'m a gamer, not a brainer."');
  const phrases = ["I stream every day from 4-6pm AEST except Wednesday & Friday.", "Join my discord server to get updates.", '"I\'m a gamer, not a brainer."'];
  var interval = self.setInterval(function() {thumbSpeechChange(phrases[i%phrases.length])}, 5000);
});

function thumbSpeechChange(to) {
  $("#thumb-speech").animate({'opacity': 0}, 2000, function() {
    $(this).text(to);
  }).animate({'opacity': 1});
  i++;
}
