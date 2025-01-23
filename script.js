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

let user = '';
function login(){
  const input  = document.getElementById('name');
  user = input.value;
  document.getElementById('userName').innerHTML = user === '' ? 'Anonymous' :  user;

  const login = document.getElementsByClassName('login')[0];
  const main = document.getElementsByClassName('main')[0];

  // console.log(login)
  login.style.display = 'none';
  main.style.display = 'flex';
  
}

function callCurrentDateTime(){
  const {day, date, hours, minute} = getCurrentDateTime();

  document.getElementById('loginDay').innerHTML = day;
  document.getElementById('loginDate').innerHTML = date;
  document.getElementById('loginHour').innerHTML = hours;
  document.getElementById('loginMinute').innerHTML = minute;

  document.getElementById('mainDay').innerHTML = day;
  document.getElementById('mainDate').innerHTML = date;
  document.getElementById('mainHour').innerHTML = hours;
  document.getElementById('mainMinute').innerHTML = minute;
}

callCurrentDateTime();

