/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The first rule of this is when a function is available in the global scope, the value of this 
    becomes the window object.

* 2. The second rule of this is when a function is called by a preceding dot, this becomes the object before the 
    preceding dot.


* 3. The third principle of this key word is usage of `new` keyword when instantiating a constructor function.
    this becomes the instance of the function.

* 4. The fourth rule of this is using call(), or apply(), or bind() to explicitly bind this.
*
* write out a code example of each explanation above
*/
function GameObject(name, dimensions, createdAt) {
    this.name = name;
    this.createdAt = createdAt;
    this.dimensions = dimensions;
  }
  GameObject.prototype.destroy = function(game) {
    return `${this.name} was removed from the ${game} game.`;
  }

// Principle 1
// code example for Window Binding
const gameObjectWindowBinding = function() {
    console.log(this);
}
console.log(gameObjectWindowBinding());

// Principle 2
// code example for Implicit Binding
  const gameObjectImplicitBinding = new GameObject('Ezekiel',   { length: 2, width: 1, height: 1},  new Date());
  console.log(gameObjectImplicitBinding.destroy('Soccer'));

// Principle 3
// code example for New Binding
const gameObjectNewBinding = new GameObject('Ezekiel',   { length: 2, width: 1, height: 1},  new Date());
console.log(gameObjectNewBinding);


// Principle 4
// code example for Explicit Binding
const gameObject = new GameObject('Ezekiel',   { length: 2, width: 1, height: 1},  new Date())
const gameObjectExplicitBinding = gameObject.destroy;
console.log(gameObjectExplicitBinding.call(gameObject, 'Soccer'));