var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
  
}
describe('destructivelyAppendKitten(name)', function() {
    it('appends a kitten to the end of the kittens array', function() {
      window.kittens = ['Milo', 'Otis', 'Garfield'];
      destructivelyAppendKitten('Ralph')
      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
      
      