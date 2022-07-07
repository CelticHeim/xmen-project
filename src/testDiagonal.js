var array = ['ABCD', 'EFGH', 'IJKL'];
var rows = array.length;
var cols = array[0].length;

for (var n = 0; n < cols + rows - 1; n += 1) {
  var r = n;
  var c = 0;
  var str = '';

  while (r >= 0 && c < cols) {
    if (r < rows)
      str += array[r][c];
    r -= 1;
    c += 1;
  }
  console.log(str);
}