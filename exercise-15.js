function groupAnimals(animals) {
  var initial = [];

//cari karakter huruf pertama
  for(var i = 0; i < animals.length; i++){
    var counter = 0;
    
    for(var j = 0; j < initial.length; j++){
      if(animals[i][0] === initial[j]){
        counter++
      }
    }
    if(counter === 0) {
      initial.push(animals[i][0]);
    }
  }

//sort karakter
  initial.sort()

  // console.log(initial)
    var baru = [];

for(var k = 0; k < initial.length; k++) {
  var arrKecil = [];

  for(var l = 0; l < animals.length; l++) {
    if(initial[k] === animals[l][0]){
      arrKecil.push(animals[l])
      
    }
    
  }

  baru.push(arrKecil);

}
return baru;

}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]