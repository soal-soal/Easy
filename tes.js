const { exec } = require('child_process');
var fs = require('fs');

let program = `function kali(a,b){
    return a*b;
}
console.log(kali(4,2));
console.log(kali(3,6));
console.log(kali(7,2));
console.log(kali(5,2));
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
    // console.log(stdout);
    //hasilnya di split ke array
    var res = stdout.split("\n");
    console.log(res);

    //hapus file setelah di esekusi
    fs.unlinkSync(nama_file)
  });
});