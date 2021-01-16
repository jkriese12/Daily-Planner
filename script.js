// Grabbing current date and time with moment.js
var currentDate = moment().format("MMMM Do YYYY");
console.log(currentDate);
var currentTime = Number(moment().format("H"));
console.log(currentTime);
// Object
function checkStorage() {
  var timeBlocks = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
  };
  if (localStorage.getItem("timeBlocks") === null) {
    localStorage.setItem("timeBlocks", JSON.stringify(timeBlocks));
  }
  $.each(JSON.parse(localStorage.getItem("timeBlocks")), function (key, value) {
    $("#" + key).val(value);
    if (currentTime < Number(key)) {
      $("#" + key).addClass("future");
    } else if (currentTime === Number(key)) {
      $("#" + key).addClass("present");
    } else {
      $("#" + key).addClass("past");
    }
  });
}
checkStorage();

// Changing text to reflect current date on header
$("#currentDay").text(currentDate);
// Local storage saving for each save button
$(".saveBtn").on("click", function (event) {
  var time = $(this).data("time");
  var saveData = JSON.parse(localStorage.getItem("timeBlocks"));
  saveData[time] = $("#" + time).val();
  localStorage.setItem("timeBlocks", JSON.stringify(saveData));
});
