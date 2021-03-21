var currentDayEl = $("#current-day");
var timeblocksListEl = $("#timeblocks");
var textareasEl = [$("#1"), $("#2"), $("#3"), $("#4"), $("#5"), $("#6"), $("#7"), $("#8"), $("#9")];
var currentCalendar = { boxes: [""] };

var today = moment();
currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

setCalText();
setHourColors();

timeblocksListEl.find("button").on("click", saveCalEntry);

function setCalText() {
   currentCalendar = JSON.parse(localStorage.getItem("schedule"));
   for (let i = 0; i < textareasEl.length; i++) {
      textareasEl[i].val(currentCalendar.boxes[i]);
   }
}
function saveCalEntry(event) {
   var currentButton = $(event.currentTarget);
   var currentTextBox = currentButton.parent().prev();
   var currentBoxNumber = currentTextBox.attr("id");
   var currentText = currentTextBox.val();
   currentCalendar.boxes[currentBoxNumber - 1] = currentText;
   localStorage.setItem("schedule", JSON.stringify(currentCalendar));
}
function setHourColors() {
  // var hourIndex = today.hour() - 9;
   var hourIndex = 13 - 9;
   for (let i = 0; i < textareasEl.length; i++) {
      if (hourIndex == i) {
         textareasEl[i].addClass("present");
      } else if (i > hourIndex) {
         textareasEl[i].addClass("future");
      } else {
         textareasEl[i].addClass("past text-dark");
      }
   }
}
