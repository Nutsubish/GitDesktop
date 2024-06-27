// xval gavaketeb ver vaswreb sorry
// Task 1


const first = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Task 1 complete");
  }, 2000);
});
first.then((message) => console.log(message));


// Task 2


const second = new Promise((resolve, reject) => {
  reject("Task 2 failed");
});
second.catch((error) => console.log(error));


// Task 3


const third = new Promise((resolve) => {
  resolve(5);
});
third
  .then((number) => number * 2)
  .then((doubled) => console.log(doubled));


// Task 4


function fourth() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First");
    }, 2000);
  }).then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second");
      }, 1000);
    });
  }).then((message) => console.log(message));
}

fourth();


// Task 5


function fifth() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, 2000);
  }).catch((error) => console.log(error));
}

fifth();


// Task 6


function sixth() {
  const delay =   5000 + 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1 complete");
    }, delay);
  });
}

sixth().then((message) => console.log(message));



// Task 7


function sevenht() {

  const delay1 =   3000 + 1000;
  const delay2 =   3000 + 2000;
  
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("First");
    }, delay1);
  }).then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Second");
      }, delay2);
    });
  }).then((message) => console.log(message));
}

sevenht();



// Task 8


function eight() {
  const delay =   4000 + 1000;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Task 3 failed");
    }, delay);
  }).catch((error) => console.log(error));
}

eight();


// Task 9


function nineth() {
  const delay =   5000 + 1000;
  const randomNumber = Math.random();

  return new Promise((resolve) => {
    setTimeout(() => {
      if (randomNumber > 0.5) {
        resolve("Task 1 complete");
      } else {
        resolve("Task 1 was quick");
      }
    }, delay);
  });
}

 nineth().then((message) => console.log(message));



// Task 10


function tenth() {
  const delay =   4000 + 1000;
  const randomNumber = Math.random();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber < 0.3) {
        reject("Task 3 failed");
      } else {
        resolve("Task 3 complete");
      }
    }, delay);
  }).catch((error) => console.log(error));
}

tenth().then((message) => console.log(message));