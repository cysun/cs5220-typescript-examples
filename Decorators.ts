function Banana(target) {
  target.prototype.banana = 2;
}

function Apple(config) {
  return function(target) {
    target.prototype.apple = config.count;
  };
}

@Banana
@Apple({
  count: 10
})
class FruitBasket {}

let fb: any = new FruitBasket();
console.log(`Bananas: ${fb.banana}`);
console.log(`Apples: ${fb.apple}`);
