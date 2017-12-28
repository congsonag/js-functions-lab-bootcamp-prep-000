function speaker() {
  sentence = "Bird is the world."
}
speaker();
console.log(sentence);

var cuteAnimal = 'quokka';

function makeVariable() {
  var cuteAnimal = 'sugar glider';
  return cuteAnimal;
}

console.log(`Variable from function cuteAnimal = ` + makeVariable())
console.log(`Variable from varaiable cuteAnimal = ${cuteAnimal}`)