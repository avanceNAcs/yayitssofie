const now = new Date();
const weekday = now.toLocaleDateString('en-US', {weekday: 'long'});
const day = now.getDate();
const month = now.toLocaleDateString('en-US', {month: 'long'});

document.getElementById("weekday").textContent = weekday;
document.getElementById("day").textContent = day;
document.getElementById("month").textContent = month;
console.log("6:21pm")
