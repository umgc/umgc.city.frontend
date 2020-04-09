const chatbox = jQuery.noConflict();
var $=jQuery.noConflict();

var $messages = $(".messages-content"),
  d,
  h,
  m,
  i = 0;


chatbox(() => {
  chatbox(".chatbox-open").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeIn()
  );

  chatbox(".chatbox-close").click(() =>
    chatbox(".chatbox-popup, .chatbox-close").fadeOut()
  );

  chatbox(".chatbox-maximize").click(() => {
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeOut();
    chatbox(".chatbox-panel").fadeIn();
    chatbox(".chatbox-panel").css({ display: "flex" });
  });

  chatbox(".chatbox-minimize").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-popup, .chatbox-open, .chatbox-close").fadeIn();
  });

  chatbox(".chatbox-panel-close").click(() => {
    chatbox(".chatbox-panel").fadeOut();
    chatbox(".chatbox-open").fadeIn();
  });
});

function insertMessage() {
  msg = $(".message-input").val();
  if ($.trim(msg) == "") {
    return false;
  }
  $('<div class="message message-personal" style="color:green; text-align: right;">' + msg + "</div>")
    .appendTo($(".mCSB_container"))
    .addClass("new");
  $(".message-input").val(null);
}

$(".message-submit").click(function() {
  insertMessage();
});

$(window).on("keydown", function(e) {
  if (e.which == 13) {
    insertMessage();
    return false;
  }
});
$(".button").click(function() {
  $(".menu .items span").toggleClass("active");
  $(".menu .button").toggleClass("active");
});
