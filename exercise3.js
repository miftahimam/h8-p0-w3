
function dataHandling2(){
  
  var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
  input.splice( 1, 2);
  input.splice(1, 0, 'Roman Alamsyah Elsharawy')
  input.splice(2, 0, 'Provinsi Bandar Lampung')
  input.splice(4, 0, 'Pria')
  input.splice(5, 0, 'SMA Internasional Metro')
  input.splice(6)
  
  
  var date = input[3].split("/");
  
  switch(date[1]){
    case '01':
    bulan = 'januari';
    break;
  
    case '02':
    bulan = 'februari';
    break;
  
    case '03':
    bulan = 'maret';
    break;
  
    case '04':
    bulan = 'april';
    break;
  
    case '05':
    bulan = 'mei';
    break;
  
    case '06':
    bulan = 'juni';
    break;
  
    case '07':
    bulan = 'juli';
    break;
  
    case '08':
    bulan = 'agustus';
    break;
  
    case '09':
    bulan = 'september';
    break;
  
    case '10':
    bulan = 'oktober';
    break;
  
    case '11':
    bulan = 'november';
    break;
  
    case '12':
    bulan = 'desember';
    break;
  }
  
  date.sort(function(value1, value2) { return value2 - value1 });

  console.log(input);
  console.log(bulan);
  
  console.log(date);
  console.log(input[3].split('/').join('-'));
  console.log(input[1].slice(0,15))
}  

dataHandling2()
