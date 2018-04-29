function factorial(n: number): number {
  if (n < 0) throw new Error('Invalid argument');

  let result: number = 1;
  for (let i: number = 1; i <= n; ++i) result *= i;
  return result;
}

console.log(factorial(0));
console.log(factorial(5));

let sizes: string[] = ['S', 'M', 'L'];

function sayHi(): void {
  console.log('Hi!');
}

enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Red;

console.log(`color is ${color}`);
console.log(`Blue is ${Color.Blue}`);

let isOdd = (n: number): boolean => n % 2 == 1;

console.log(isOdd(11));

let a = 'hello';

let b = 2.1;

let c : number[] = [1, 2, 3];

let d = ['one', 'two', 3]; 

c.push(4);
d.push('four');

console.log(c);
