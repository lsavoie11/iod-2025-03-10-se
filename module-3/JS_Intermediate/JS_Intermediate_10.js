const today = new Date();
console.log("Current time is " + today.toLocaleTimeString());
console.log(today.getHours() + " hours have passed so far today");

// Exercise A
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log("Total minutes passed so far today: " + minutesPassed);

//Exercise B
const secondsPassed =
  today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log("Total seconds passed so far today: " + secondsPassed);

// Exercise C
function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // Adjust for negative days or months
  if (days < 0) {
    months--;
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  console.log(`I am ${years} years, ${months} months, and ${days} days old.`);
}

const myBirthDate = new Date(1998, 9, 13);
calculateAge(myBirthDate);

// Exercise D
function daysInBetween(date1, date2) {
  const msInDay = 24 * 60 * 60 * 1000;
  const diffInMs = Math.abs(date2 - date1);
  return Math.floor(diffInMs / msInDay);
}

// Test the function
const date1 = new Date(2025, 3, 1);
const date2 = new Date(2025, 3, 25);
console.log("Days in between: " + daysInBetween(date1, date2));
