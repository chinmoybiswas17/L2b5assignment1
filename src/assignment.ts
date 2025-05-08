//1
//Create a function that takes a string and an optional boolean.

function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));

//2
//Create a function that filters an array of objects by the rating property, returning only items with a rating of 4 or more.

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

//3
//Create a generic function that concatenates multiple arrays of the same type using rest parameters.

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, cur) => acc.concat(cur));
}
// console.log(concatenateArrays(["a", "b"], ["c"])); // Output: ["a", "b", "c"]
// console.log(concatenateArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]

//4
//Create a Vehicle class with private make and year properties and a getInfo() method.
//Create a Car class extending Vehicle, adding a private model property and a getModel() method.

class Vehicle {
  private _make: string;
  private _year: number;

  constructor(_make: string, _year: number) {
    this._make = _make;
    this._year = _year;
  }

  public getInfo(): string {
    return `Make: ${this._make}, Year: ${this._year}`;
  }
}

class Car extends Vehicle {
  private _model: string;

  constructor(_make: string, _year: number, _model: string) {
    super(_make, _year);
    this._model = _model;
  }

  public getModel(): string {
    return `Model: ${this._model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
//console.log(myCar.getInfo()); // Output: "Make: Toyota, Year: 2020"
//console.log(myCar.getModel()); // Output: "Model: Corolla"

//5
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10)); // Output: 20

//6
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;

  return products.reduce((max, current) =>
    current.price > max.price ? current : max
  );
}
// const products = [
//   { name: "Pen", price: 10 },
//   { name: "Notebook", price: 25 },
//   { name: "Bag", price: 50 },
// ];

// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
//7
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}
// console.log(getDayType(Day.Monday)); // আউটপুট: "Weekday"
// console.log(getDayType(Day.Sunday)); // আউটপুট: "Weekend"

//8
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
