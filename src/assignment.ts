{
  function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, cur) => acc.concat(cur));
  }

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

  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }

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
}
