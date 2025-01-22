function getCurrentDateTime() {
  const now = new Date();

  //get Date components
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2,'0');

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];

  const day = daysOfWeek[now.getDay()];



  const hours = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');

  console.log(hours);
  // console.log(minute);

  // console.log(daysOfWeek[dayIndex]);
  // console.log(year);
  // console.log(month);
  // console.log(day);

  return {year, month, date, day, hours, minute};

}

function callCurrentDateTime(){
  const {day, date, hours, minute} = getCurrentDateTime();

  document.getElementById('day').innerHTML = day;
  document.getElementById('date').innerHTML = date;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minute;
}

callCurrentDateTime();