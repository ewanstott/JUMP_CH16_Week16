//JOI DEMO

const schema = {
  name: Joi.string().min(3).max(10),
  location: Joi.string().min(2).max(20),
  email: Joi.string().min(5).max(31),
  age: Joi.number().min(18).max(99),
};

const ref = document.getElementById("myForm");

const userInput = {};

ref.addEventListener("input", (e) => {
  userInput[e.target.name] = e.target.value;
  console.log(userInput);

  Joi.validate(userInput, schema, { abortEarly: false }, (errors, results) => {
    // console.log(errors.details);

    //Turns error messages into an object
    const errorsMod = {};

    if (errors) {
      errors.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });
    }

    //remove old errors
    const errorRefs = document.getElementsByTagName("p");
    Array.from(errorRefs).forEach((error) => {
      error.innerHTML = "";
    });

    for (const error in errorsMod) {
      document.getElementById(`${error}Error`).innerHTML = errorsMod[error];
      // console.log(error);
    }
  });
});
