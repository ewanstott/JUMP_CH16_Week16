// const ref = document.getElementById("demo");

// ref.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const myForm = document.forms["demo"];
//   console.log(myForm);

//   const formData = new FormData(myForm);

//   const data = Object.fromEntries(formData);

//   console.log(data);
// });

/////////
// const ref = document.getElementById("demo");

// ref.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

//////////// Debounce (shows a delayed validation error message) (pg68 -> 19.34) - can use a 3rd party like throttle
// const ref = document.getElementById("demo");
// const error = document.getElementById("error");

// let lastTypeTime;
// let lastTypeTimer;

// ref.addEventListener("input", (e) => {
//   if (e.target.value.length > 3) {
//     error.innerHTML = "";
//   } else {
//     // lastTypeTime = Date.now();
//     // if (lastTypeTime + 1000 < Date.now()) {
//     //     console.log('clearing timer!');
//     //   clearTimeout(lastTypeTimer);
//     // }

//     lastTypeTimer = setTimeout(() => {
//       error.innerHTML = "Name too short";
//     }, 2000);
//   }
// });

////Example 19.45ish

// const ref = document.getElementById("input");
// let input = "";

// document.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   input += e.key;
//   console.log(input);
//   ref.innerHTML = input;
// });
