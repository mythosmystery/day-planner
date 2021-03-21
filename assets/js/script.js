var currentDayEl = $("#current-day");
var timeblocksListEl = $("#timeblocks");
var textareasEl = [$("#1"), $("#2"), $("#3"), $("#4"), $("#5"), $("#6"), $("#7"), $("#8"), $("#9")];
var currentCalendar = { boxes: [""] };
var today = moment();

//formats the date and adds it to the DOM
currentDayEl.text(today.format("dddd, MMMM Do YYYY"));

//creates a schedule item in local storage if it doesnt already exist
if(localStorage.getItem("schedule") == null){
    localStorage.setItem("schedule", JSON.stringify(currentCalendar));
}

setCalText();
setHourColors();

timeblocksListEl.find("button").on("click", saveCalEntry);

//sets the text on screen to whats in local storage
function setCalText() {
   currentCalendar = JSON.parse(localStorage.getItem("schedule"));
   for (let i = 0; i < textareasEl.length; i++) {
      textareasEl[i].val(currentCalendar.boxes[i]);
   }
}

//finds the button that was clicked and adds text in its respective textarea to local storage
function saveCalEntry(event) {
   var currentButton = $(event.currentTarget);
   var currentTextBox = currentButton.parent().prev();
   var currentBoxNumber = currentTextBox.attr("id");
   var currentText = currentTextBox.val();
   currentCalendar.boxes[currentBoxNumber - 1] = currentText;
   localStorage.setItem("schedule", JSON.stringify(currentCalendar));
}

//sets the textboxes to the correct color based on current time
function setHourColors() {
    //converts current hour to a form that can be used with the array
   var hourIndex = today.hour() - 9;

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
