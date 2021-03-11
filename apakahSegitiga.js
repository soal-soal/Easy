const { exec } = require('child_process');
var fs = require('fs');

let program = `function apakahSegitiga(sisi){
    let x = sisi.sort(function(a, b){return b - a});
    if (x[0]<x[1]+x[2]){
        return true
    }
    else{
        return false
    }
}
console.log(apakahSegitiga([7,2,2])) // false
console.log(apakahSegitiga([4,9,5])) //false
console.log(apakahSegitiga([12,5,13])) // true
console.log(apakahSegitiga([1,1,1])) //true
console.log(apakahSegitiga([3,10,8])) //true
`
const waktu = new Date();
let nama_file = waktu.getTime()+'.js'
//buat file untuk esekusi
fs.writeFile(nama_file, program, function (err) {
  if (err) throw err;
  exec('node ./'+nama_file, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }

    //hasilnya ada di stdout
    //  console.log(stdout);
    //hasilnya di split ke array
    var res = stdout.split("\n");
    console.log(res);

    //hapus file setelah di esekusi
    fs.unlinkSync(nama_file)
  });
});

// Untuk dapat membuat sebuah segitiga, diperlukan 3 buah garis dengan panjang tertentu. Buatlah sebuah function untuk menentukan apakah garis dengan sisi yang telah di tentukan dapat menghasilkan segitiga atau tidak? hasil yang di inginkan berupa boolean (true false)