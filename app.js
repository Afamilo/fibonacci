const arr = [3, 2, 1, 13, 8, 5, 7]; 

function separateFunction(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = separateFunction(arr.slice(0, mid));
  const right = separateFunction(arr.slice(mid, arr.length));
  return ;
}
//console.log(separateFunction(arr));

