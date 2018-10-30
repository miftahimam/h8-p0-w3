function angkaPalindrome(angka) {

 for(var i= angka+1;i < 1000 + angka; i++) {   
  var ang = i.toString();
  var reverse ='';

  for(var j = ang.length - 1; j >= 0  ; j--) {
    reverse = reverse + ang[j];
  }
  if(ang === reverse) {
    return i;
  }
   


    
  }    
  
}

//    }
//  }
//  return true;


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(135)); // 141
