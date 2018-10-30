function palindrome(str) {
  var tr = false;
    var gnjl = 0;
  str = str.toLowerCase();
  str = str.replace(/[\W_]+/g,'');
   
  var strs = str.split("");
  var strl = strs.length;
  var cntr = Math.ceil(strl/2);
  if(strl%2==1) gnjl = 1;
     
    
  
  var str1 = [];
  var str2 = [];
  for(var i=0;i<=cntr-1;i++){
        str1.push(strs[i]);
    }
    for(var i=cntr-1;i<strl;i++){
        str2.push(strs[i]);
  }
  if(gnjl){ 
 
  }else{
      str2.splice(0,1);
  }
  str1 = str1.join('');
  str2 = str2.reverse().join('');
  if(str1 == str2) tr =true;
   
  
  return tr;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false