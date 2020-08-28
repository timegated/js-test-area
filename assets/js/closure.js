// advanced scope

const myMessage = () => {

  const x = `Help! I think I found a clue`

  const alerter = () => console.log(x);

  setTimeout(alerter, 1000);
  console.log(`does this happen first? here in the console.log`);
}

// myMessage();


// even more advanced scope!

const anotherMessage = () => {
  const x = 'Some message here about something important';
  let count = 0;
  const alerter = () => {
    console.log(`${x} ${++count}`);
  };
  return alerter;
};


const funcAlert = anotherMessage();
const funcAlert2 = anotherMessage();

setInterval(() => {
  funcAlert();
}, 1000);