const { exec } = require('child_process');
var fs = require('fs');

let program = `function tribonacci(s,n){  
    for (let i = 0; i < n-3; i++) { 
      s.push(s[i] + s[i+1] + s[i+2]);
    }
    return s.slice(0, n); 
  }


console.log(tribonacci([1,1,1],10)) //[1,1,1,3,5,9,17,31,57,105]
console.log(tribonacci([0,0,1],10)) //[0,0,1,1,2,4,7,13,24,44]
console.log(tribonacci([0,1,1],10)) //[0,1,1,2,4,7,13,24,44,81]
console.log(tribonacci([1,0,0],10)) //[1,0,0,1,1,2,4,7,13,24]
console.log(tribonacci([0,0,0],10)) //[0,0,0,0,0,0,0,0,0,0]
console.log(tribonacci([1,1,1],1))  //[1]
console.log(tribonacci([300,200,100],0)) //[]
console.log(tribonacci([1,8,5],2)) //[1,8]


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
     console.log(stdout);
    //hasilnya di split ke array
    var res = stdout.split("\n");
    console.log(res);

    //hapus file setelah di esekusi
    fs.unlinkSync(nama_file)
  });
});