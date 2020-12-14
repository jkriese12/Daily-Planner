$(document).ready(function () {
  // Grabbing current date and time with moment.js
  var currentDate = moment().format("MMMM Do YYYY");
  console.log(currentDate);
  var currentTime = moment().format("H");
  console.log(currentTime);
  // Changing text to reflect current date on header
  $("#currentDay").text(currentDate);
  // Local storage saving for each save button - 9AM
  $(".saveBtn9").on("click", function (event) {
    event.preventDefault();
    var userText = $("#9-am").val();
    localStorage.setItem("todo9", userText);
    lastRegistered9();
  });
  function lastRegistered9() {
    var getIt = localStorage.getItem("todo9");
    $("#9-am").text(getIt);
  }
  // 10AM Save
  $(".saveBtn10").on("click", function (event) {
    event.preventDefault();
    var userText = $("#10-am").val();
    localStorage.setItem("todo10", userText);
    lastRegistered10();
  });
  function lastRegistered10() {
    var getIt = localStorage.getItem("todo10");
    $("#10-am").text(getIt);
  }
  // 11AM Save
  $(".saveBtn11").on("click", function (event) {
    event.preventDefault();
    var userText = $("#11-am").val();
    localStorage.setItem("todo11", userText);
    lastRegistered10();
  });
  function lastRegistered11() {
    var getIt = localStorage.getItem("todo11");
    $("#11-am").text(getIt);
  }
  // 12PM Save
  $(".saveBtn12").on("click", function (event) {
    event.preventDefault();
    var userText = $("#12-pm").val();
    localStorage.setItem("todo12", userText);
    lastRegistered10();
  });
  function lastRegistered12() {
    var getIt = localStorage.getItem("todo12");
    $("#12-pm").text(getIt);
  }
  // 1PM Save
  $(".saveBtn1").on("click", function (event) {
    event.preventDefault();
    var userText = $("#1-pm").val();
    localStorage.setItem("todo1", userText);
    lastRegistered1();
  });
  function lastRegistered1() {
    var getIt = localStorage.getItem("todo1");
    $("#1-pm").text(getIt);
  }
  // 2PM Save
  $(".saveBtn2").on("click", function (event) {
    event.preventDefault();
    var userText = $("#2-pm").val();
    localStorage.setItem("todo2", userText);
    lastRegistered2();
  });
  function lastRegistered2() {
    var getIt = localStorage.getItem("todo2");
    $("#2-pm").text(getIt);
  }
  // 3PM Save
  $(".saveBtn3").on("click", function (event) {
    event.preventDefault();
    var userText = $("#3-pm").val();
    localStorage.setItem("todo3", userText);
    lastRegistered3();
  });
  function lastRegistered3() {
    var getIt = localStorage.getItem("todo3");
    $("#3-pm").text(getIt);
  }
  // 4PM Save
  $(".saveBtn4").on("click", function (event) {
    event.preventDefault();
    var userText = $("#4-pm").val();
    localStorage.setItem("todo4", userText);
    lastRegistered4();
  });
  function lastRegistered4() {
    var getIt = localStorage.getItem("todo4");
    $("#4-pm").text(getIt);
  }
  // 5PM Save
  $(".saveBtn5").on("click", function (event) {
    event.preventDefault();
    var userText = $("#5-pm").val();
    localStorage.setItem("todo5", userText);
    lastRegistered5();
  });
  function lastRegistered5() {
    var getIt = localStorage.getItem("todo5");
    $("#5-pm").text(getIt);
  }
  // Running each individual row function to grab data from local storage upon loading of site
  lastRegistered9();
  lastRegistered10();
  lastRegistered11();
  lastRegistered12();
  lastRegistered1();
  lastRegistered2();
  lastRegistered3();
  lastRegistered4();
  lastRegistered5();
  // Changing color of each row based on time of day (past, present or future)
  if (currentTime <= 8) {
    $("textarea").addClass("future");
  } else if (currentTime >= 18) {
    $("textarea").addClass("past");
  } else if (currentTime == 9) {
    $("#9-am").addClass("present");
    $("#10-am").addClass("future");
    $("#11-am").addClass("future");
    $("#12-pm").addClass("future");
    $("#1-pm").addClass("future");
    $("#2-pm").addClass("future");
    $("#3-pm").addClass("future");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 10) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("present");
    $("#11-am").addClass("future");
    $("#12-pm").addClass("future");
    $("#1-pm").addClass("future");
    $("#2-pm").addClass("future");
    $("#3-pm").addClass("future");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 11) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("present");
    $("#12-pm").addClass("future");
    $("#1-pm").addClass("future");
    $("#2-pm").addClass("future");
    $("#3-pm").addClass("future");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 12) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("past");
    $("#12-pm").addClass("present");
    $("#1-pm").addClass("future");
    $("#2-pm").addClass("future");
    $("#3-pm").addClass("future");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 13) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("past");
    $("#12-pm").addClass("past");
    $("#1-pm").addClass("present");
    $("#2-pm").addClass("future");
    $("#3-pm").addClass("future");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 14) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("past");
    $("#12-pm").addClass("past");
    $("#1-pm").addClass("past");
    $("#2-pm").addClass("present");
    $("#3-pm").addClass("future");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 15) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("past");
    $("#12-pm").addClass("past");
    $("#1-pm").addClass("past");
    $("#2-pm").addClass("past");
    $("#3-pm").addClass("present");
    $("#4-pm").addClass("future");
    $("#5-pm").addClass("future");
  } else if (currentTime == 16) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("past");
    $("#12-pm").addClass("past");
    $("#1-pm").addClass("past");
    $("#2-pm").addClass("past");
    $("#3-pm").addClass("past");
    $("#4-pm").addClass("present");
    $("#5-pm").addClass("future");
  } else if (currentTime == 17) {
    $("#9-am").addClass("past");
    $("#10-am").addClass("past");
    $("#11-am").addClass("past");
    $("#12-pm").addClass("past");
    $("#1-pm").addClass("past");
    $("#2-pm").addClass("past");
    $("#3-pm").addClass("past");
    $("#4-pm").addClass("past");
    $("#5-pm").addClass("present");
  }
});
