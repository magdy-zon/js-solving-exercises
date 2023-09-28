

function getSpiralTraverse(matrixToTraverse) {
  let topE = 0;
  let leftE = 0;
  let bottomE = matrixToTraverse.length-1;
  let rightE = matrixToTraverse[0].length-1;
  let output2 = [];
  let dir = 0;

  while (topE <= bottomE && output2.length != matrixToTraverse.length * matrixToTraverse[0].length) {
    if (dir == 0) {
      for (let i = leftE; i < rightE+1; i++) {
        output2.push(matrixToTraverse[topE][i]);
      }
      topE +=1;
      dir = 1;
    } else if (dir == 1) {
      for (let i = topE; i < bottomE+1; i++) {
        output2.push(matrixToTraverse[i][rightE]);
      }
      rightE -= 1;
      dir = 2;
    } else if (dir == 2) {
      for (let i = rightE; i > leftE-1; i--) {
          output2.push(matrixToTraverse[bottomE][i]);
      }
      bottomE -= 1;
      dir = 3;
    } else if (dir == 3) {
      for (let i = bottomE; i > topE-1; i--) {
          output2.push(matrixToTraverse[i][leftE]);
      }
      leftE += 1;
      dir = 0;
    }
  }

  return output2;
}

console.log(getSpiralTraverse([[1,2,3],[4,5,6],[7,8,9]]));