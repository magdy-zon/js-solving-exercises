

function generateTriangle(rows) {
  let rowIncase = 1;
  let output = [];
  let arrayInCase = [];
  let prevArray = [];
  while (output.length < rows) {
      if (rowIncase > 1)
          prevArray = output[output.length - 1];
      for (let i = 0; i < rowIncase; i++) {
          if(arrayInCase.length == 0 || arrayInCase.length == rowIncase-1)
              arrayInCase.push(1);
          else {
              arrayInCase.push(prevArray[i] + prevArray[i-1]);
          }
      }
      output.push(arrayInCase);
      arrayInCase = [];
      rowIncase += 1;
  }

  return output;
}

console.log(generateTriangle(600));