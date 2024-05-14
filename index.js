var item = $("#error-msg");
var warning = $("#error");

$("#btn").click(function () {
  var input = $("#email-input").val();
  if (input === "" || validate(input) === false) {
    var msg = "";
    if (input === "") {
      msg = "Whoops! It looks like you forgot to add your email";
    } else {
      msg = "Please provide a valid email address";
    }
    $("#email-input").addClass("warning-box");

    item.text(msg);
    item.addClass("show-warning");
    warning.addClass("show-warning");

    item.fadeIn();
    warning.fadeIn();

    for (var count = 0; count < 3; count++) {
      warning.fadeOut();
      warning.fadeIn();
    }
  } else {
    $("#email-input").removeClass("warning-box");
    item.removeClass("show-warning");
    warning.removeClass("show-warning");
  }
});

function validate(email) {
  var pattern = /^[\w]+[\.\w+]*[\w]+@[\w]+\.[\w]+[\.\w]*[\w]+$/;
  return pattern.test(email);
}
