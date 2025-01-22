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

  document.getElementById('day').innerHTML = day;
  document.getElementById('date').innerHTML = date;
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = minute;
}

callCurrentDateTime();




// .
// .
// .
// .
// .
// .



// <script>
// function getCurrentDateTime() {
//   const now = new Date();

//   // Get Date components
//   const year = now.getFullYear();
//   const month = String(now.getMonth() + 1).padStart(2, '0');
//   const date = String(now.getDate()).padStart(2, '0');

//   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   const day = daysOfWeek[now.getDay()];

//   const hours = String(now.getHours()).padStart(2, '0');
//   const minute = String(now.getMinutes()).padStart(2, '0');

//   return { year, month, date, day, hours, minute };
// }

// let user = '';
// function login() {
//   const input = document.getElementById('name');
//   user = input.value;
//   document.getElementById('userName').innerHTML = user === '' ? 'Anonymous' : user;

//   const login = document.getElementsByClassName('login')[0];
//   const main = document.getElementsByClassName('main')[0];

//   login.style.display = 'none';
//   main.style.display = 'flex';

//   callCurrentDateTime('main'); // Call this function after displaying the main block
// }

// function callCurrentDateTime(context) {
//   const { day, date, hours, minute } = getCurrentDateTime();

//   if (context === 'login') {
//     document.getElementById('login-day').innerHTML = day;
//     document.getElementById('login-date').innerHTML = date;
//     document.getElementById('login-hour').innerHTML = hours;
//     document.getElementById('login-minute').innerHTML = minute;
//   } else if (context === 'main') {
//     document.getElementById('main-day').innerHTML = day;
//     document.getElementById('main-date').innerHTML = date;
//     document.getElementById('main-hour').innerHTML = hours;
//     document.getElementById('main-minute').innerHTML = minute;
//   }
// }

// callCurrentDateTime('login'); // Initial call for the login block
// </script>

