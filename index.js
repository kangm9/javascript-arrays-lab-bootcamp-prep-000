var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(arrays, name) {
  return [arrays, ...name];
}
