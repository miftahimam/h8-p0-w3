function hitungJumlahKata(kalimat) {
  var jumlahKata=0
  var kata=''

  for (i=0; i<kalimat.length; i++){
    if(kalimat[i]===' ' && kata!=''){
      jumlahKata+=1
      kata=''
    }
    else{
    kata+= kalimat[i]}

  }
  if(kata!=''){
    jumlahKata = jumlahKata+1
  }
    return jumlahKata
  }


console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

  