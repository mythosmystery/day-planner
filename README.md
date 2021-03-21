Created by Hunter Barton

## My Work
First I used Moment.js to get today's date. I then formatted it into a nice and readable format and display it to the DOM. Then I check if there's a schedule item in local storage and if not I add a blank calendar object to local storage. Then any items that are in local storage are added to the correct time slot on the display. Also the slots are colored based on the current time. If a save button is clicked a function is executed that gets the text from the text area and adds it to local storage. I used bootstrap for the frontend, and Moment.js, Jquery, and JSON for the backend.

## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![A user clicks on slots on the color-coded calendar and edits the events.](assets/images/05-third-party-apis-homework-demo.gif)