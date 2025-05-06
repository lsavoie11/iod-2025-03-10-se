import moment from "moment";

// Exercise 1/2: Calculate the difference in years, months, and days
const end = moment("2025-05-05");
const start = moment("1998-09-13");

const diffInYears = end.diff(start, "years");
const diffInMonths = end.diff(start, "months") % 12;
const diffInDays = end.diff(
  start.add(diffInYears, "years").add(diffInMonths, "months"),
  "days"
);

console.log({ years: diffInYears, months: diffInMonths, days: diffInDays });

// Exercise 3: Find the date closest to the current date
function getClosestDate(date1, date2) {
  const now = moment();
  const diff1 = Math.abs(now.diff(moment(date1)));
  const diff2 = Math.abs(now.diff(moment(date2)));

  return diff1 < diff2
    ? moment(date1).toISOString()
    : moment(date2).toISOString();
}

const date1 = "2025-03-15T12:00:00";
const date2 = "2025-02-21T12:00:00";

const closestDate = getClosestDate(date1, date2);
console.log(`The closest date to now is: ${closestDate}`);

// Exercise 4: Compare two dates to see which one is earlier
const firstDate = moment("2025-05-01");
const secondDate = moment("2025-05-05");

if (firstDate.isBefore(secondDate)) {
  console.log("The first date is before the second date.");
} else if (firstDate.isAfter(secondDate)) {
  console.log("The first date is after the second date.");
} else {
  console.log("The two dates are the same.");
}

// Exercise 5: Display current date and time in different time zones
const londonTime = moment().tz("Europe/London").format();
console.log(`London time: ${londonTime}`);
