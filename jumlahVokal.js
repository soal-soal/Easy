const { exec } = require('child_process');
var fs = require('fs');

let program = `function jmlVokal(str) {
    var vowelsCount = 0;
    for(let i = 0;i<str.length;i++){
        if(str[i]=="a" || str[i]=='i' || str[i]=='u'|| str[i]=='e' || str[i]=='o'){
            vowelsCount+=1
        }
    }
    
    return vowelsCount;
  }

  console.log(jmlVokal("indonesia")) //5
  console.log(jmlVokal("fosanacademy")) //5
  console.log(jmlVokal("javascript")) //3
  console.log(jmlVokal("semarangselatan")) //6
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

// 