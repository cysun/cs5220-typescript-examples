interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  getIncome(): number;
}

interface Instructor {
  getCourses(): string[];
}

class Faculty implements Employee, Instructor {
  name: string;
  age: number;
  salary: number;
  courses: string[];

  constructor(name: string, age: number, salary: number, courses: string[]) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.courses = courses;
  }

  getIncome(): number {
    return this.salary;
  }

  getCourses(): string[] {
    return this.courses;
  }
}
