var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(array, name) {
  return [array, ...name];
}
