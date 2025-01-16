const cash = {};

function getResult(value) {
  if (value in cash) {
    console.log("From cash = ", cash[value]);
    return cash[value];
  } else {
    const result = value ** value;
    cash[value] = result;
    console.log("New result = ", result);
    return result;
  }
}

getResult(4);
getResult(5);
getResult(4);
