function pasanganTerbesar(angka) {
    
    var str= angka.toString();
    var array=[]

    
    for(var i=0; i<str.length-1; i++){
        var pasangan= str[i]+str[i+1] 
        array.push(Number(pasangan))       
    }
    
    
    var terbesar=0
    for (i=0; i<array.length; i++){
        if(array[i] > terbesar){
            terbesar=array[i]
        }
    }
    return terbesar

  }
  console.log(pasanganTerbesar(741573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99