class User {
  static count = 0;
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    User.count += 1;
  }

  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  talk() {
    return `Hi, I'm ${this.name}!`;
  }
}

class Administrator extends User {
  password;

  constructor(firstName, lastName, password) {
    super(firstName, lastName);
    this.password = password;
  }

  talk() {
    return `${super.talk()} And I'm an administrator.`;
  }
}

let user1 = new User('John', 'Doe');
let user2 = new Administrator('Jane', 'Doe', 'abcd');

console.log(user1.talk());
console.log(user2.talk());

console.log(`Total users: ${User.count}`);
