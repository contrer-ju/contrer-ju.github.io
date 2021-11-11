$(document).ready(function () {
  $("#btn-menu").click(function () {
    $("#menu").slideToggle(500, function () {
      $("#btn-menu").html(function () {
        return $("#menu").is(":visible") ? "&#10005;" : "&#9776;";
      });
    });
  });

  $("#btn-brand").click(function () {
    $("#btn-about").attr("class", "btn");
    $("#btn-work").attr("class", "btn");
    $("#btn-project").attr("class", "btn");
    $("#btn-contact").attr("class", "btn");
  });

  $("#btn-about").click(function () {
    $("#btn-about").attr("class", "btn-active");
    $("#btn-work").attr("class", "btn");
    $("#btn-project").attr("class", "btn");
    $("#btn-contact").attr("class", "btn");
  });

  $("#btn-work").click(function () {
    $("#btn-about").attr("class", "btn");
    $("#btn-work").attr("class", "btn-active");
    $("#btn-project").attr("class", "btn");
    $("#btn-contact").attr("class", "btn");
  });

  $("#btn-project").click(function () {
    $("#btn-about").attr("class", "btn");
    $("#btn-work").attr("class", "btn");
    $("#btn-project").attr("class", "btn-active");
    $("#btn-contact").attr("class", "btn");
  });

  $("#btn-contact").click(function () {
    $("#btn-about").attr("class", "btn");
    $("#btn-work").attr("class", "btn");
    $("#btn-project").attr("class", "btn");
    $("#btn-contact").attr("class", "btn-active");
  });

  $("#work-image").click(function (event) {
    if (width > 768) {
      $("#modal-image").attr("src", event.target.attributes.src.value);
      const indexOfModalThumbnailActive =
        event.target.attributes.src.value.indexOf(".j") - 1;
      $(
        "#modal-thumbnail0" +
          event.target.attributes.src.value.substring(
            indexOfModalThumbnailActive,
            indexOfModalThumbnailActive + 1
          )
      ).attr("class", "thumbnail-modal thumbnail-border-active");
      $("#work-modal-container").attr(
        "class",
        "horizontal-width work-modal-container"
      );
      $("#work-container").attr(
        "class",
        "horizontal-width work-project-flex hidden"
      );
    }
  });

  $("#modal-close").click(function () {
    $(".thumbnail-modal").attr(
      "class",
      "thumbnail-modal thumbnail-border-inactive"
    );
    $("#work-modal-container").attr(
      "class",
      "horizontal-width work-modal-container hidden"
    );
    $("#work-container").attr("class", "horizontal-width work-project-flex");
  });

  $("#submit-button").click(function (event) {
    Email.send({
      SecureToken: "aa99b703-c36d-4543-97a8-3b93f2be99bf",
      To: "contrerju@gmail.com",
      From: "juan@swordvoice.com",
      Subject: event.target.form[2].value,
      Body:
        "From: " +
        event.target.form[0].value +
        ",  Email: " +
        event.target.form[1].value +
        ",  Body: " +
        event.target.form[3].value,
    }).then(function (message) {
      message === "OK"
        ? (document.getElementById("response-message").innerHTML = "Message sent, thanks")
        : (document.getElementById("response-message").innerHTML =
            "Something went wrong, try again later.");
      document.getElementById("name-field").value = "";
      document.getElementById("email-field").value = "";
      document.getElementById("subject-field").value = "";
      document.getElementById("message-field").value = "";
      setTimeout(function () {
        document.getElementById("response-message").innerHTML = "";
      }, 5000);
    });
  });
});
