//1


const helloWorldPromise = new Promise((resolve, reject) => {
  resolve("Hello, World!");
});

helloWorldPromise.then(result => console.log(result));


//2

const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved after 2 seconds");
  }, 2000);
});

delayedPromise.then(result => console.log(result));

//3

const firstPromise = new Promise((resolve, reject) => {
  resolve("First");
});

firstPromise
  .then(result => {
    return result + " -> Second";
  })
  .then(result => console.log(result));


//4

const manythings = new Promise((resolve, reject) => {
  resolve("thing 1");
});

manythings
  .then(result => {
    console.log(result);
    return "thing 2";
  })
  .then(result => {
    console.log(result);
    return "thing 3";
  })
  .then(result => console.log(result));

//5

const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Rejected after 1 second"));
  }, 1000);
});

rejectPromise.catch(error => console.log(error.message));

//6

function printMessages() {
  setTimeout(() => {
    console.log("One");
    setTimeout(() => {
      console.log("Two");
      setTimeout(() => {
        console.log("Three");
      }, 3000);
    }, 2000);
  }, 1000);
}

printMessages();


// 7


function delaymessages() {
    setTimeout(() => {
      console.log("One");
      setTimeout(() => {
        console.log("Two");
        setTimeout(() => {
          console.log("Three");
        }, 3000);
      }, 2000); 
    }, 1000); 
  }
  
  printMessagesSequentially();
  




const successOrError = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("it did!");
  } else {
    reject(new Error("what did you do?!"));
  }
});

successOrError
  .then(result => console.log(result))
  .catch(error => console.log(error.message));



  //9


const messagePromise = new Promise((resolve, reject) => {
  resolve("This is a resolved message");
});

messagePromise.then(result => console.log(result));

//10

const chainPromise = new Promise((resolve, reject) => {
  resolve(1);
});

chainPromise
  .then(result => {
    console.log(result);
    return result + 1;
  })
  .then(result => {
    console.log(result); 
    return result + 1;
  })
  .then(result => {
    console.log(result); 
  });
