const { DateTime } = require("luxon");

//Exercise 1/2 : Find time between current date and birth date
const end = DateTime.fromISO("2025-05-05");
const start = DateTime.fromISO("1998-09-13");

const diffInMonths = end.diff(start, ["years", "months", "days"]);
diffInMonths.toObject();
console.log(diffInMonths.toObject());

// Exercise 3: Find the date closest to current date
function getClosestDate(date1, date2) {
  const now = DateTime.now();

  const parsedDate1 = DateTime.fromISO(date1);
  const parsedDate2 = DateTime.fromISO(date2);

  const diff1 = Math.abs(now.diff(parsedDate1).milliseconds);
  const diff2 = Math.abs(now.diff(parsedDate2).milliseconds);

  return diff1 < diff2 ? parsedDate1.toISO() : parsedDate2.toISO();
}

const date1 = "2025-03-15T12:00:00";
const date2 = "2025-02-21T12:00:00";

const closestDate = getClosestDate(date1, date2);
console.log(`The closest date to now is: ${closestDate}`);

// Exercise 4: Compare two dates to see which one is earlier
const firstDate = DateTime.fromISO("2025-05-01");
const secondDate = DateTime.fromISO("2025-05-05");

// Compare the dates
if (firstDate < secondDate) {
  console.log("The first date is before the second date.");
} else if (firstDate > secondDate) {
  console.log("The first date is after the second date.");
} else {
  console.log("The two dates are the same.");
}

//Exercise 5: display current date and time in different time zones
const londonTime = DateTime.now().setZone("Europe/London");
console.log(`London time: ${londonTime.toISO()}`);
