// function displayClock() {
//     const clock = document.getElementById("clock");
//     setInterval(() => {
//       const now = new Date();
//       const time = now.toLocaleTimeString();
//       clock.textContent = time;
//     }, 1000);
//   }
//   displayClock();




// function calculateArea(radius) {
//     return Math.PI *radius* radius;
//   }
//   const area = calculateArea(10); 
//   console.log(area);




// function convertToKebabCase(str) {
//     return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
//   }
//   const kebabCase = convertToKebabCase("helloWorld"); 
//   console.log(kebabCase);




// function countdownTimer(targetDate) {
//     const targetTime = targetDate.getTime();
//     setInterval(() => {
//       const now = new Date().getTime();
//       const distance = targetTime - now;
//       const days = Math.floor(distance / (1000 *60* 60 * 24));
//       const hours = Math.floor((distance % (1000 *60* 60 *24)) / (1000* 60 * 60));
//       const minutes = Math.floor((distance % (1000 *60* 60)) / (1000 * 60));
//       const seconds = Math.floor((distance % (1000 * 60)) / 1000);
//       console.log(`${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining.`);
//     }, 1000);
//   }
//   const targetDate = new Date("December 31, 2022 23:59:59"); 
//   countdownTimer(targetDate);





// function getDayOfWeek(date) {
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayOfWeek = days[date.getDay()];
//     return dayOfWeek;
//   }
//   const date = new Date(); 
//   const dayOfWeek = getDayOfWeek(date);
//   console.log(dayOfWeek);



// function getCurrentDate() {
//     const date = new Date();
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     const Date1 = date + day + month
//     const Date2 = day + date + month
//     const Date3 = month + day + date
//     return [Date1, Date2, Date3];
//   }
//   const [Date1, Date2, Date3] = getCurrentDate();
//   console.log(Date1);
//   console.log(Date2);
//   console.log(Date3);



// function isLeapYear(date) {
//     const year = date.getFullYear();
//     if(year % 4 ==0){
//         console.log("is a leap year")
//     }
//     else(
//         console.log("is not a leap year")
//     )
//   }
//   const date = new Date(); 
//   const isLeap = isLeapYear(date);


// function calculate(D) {
//     const wasborn = 1999;
//     const date = D.getFullYear();
//     const age = date - wasborn;
//     return age;
//  }
//  const d = new Date();
//  console.log(calculate(d));