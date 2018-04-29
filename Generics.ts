function compare<T>(a: T, b: T): number {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
}

class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T>;
  right: BinaryTreeNode<T>;
}

console.log(compare<number>(10, 20));
console.log(compare('a', 'b'));
