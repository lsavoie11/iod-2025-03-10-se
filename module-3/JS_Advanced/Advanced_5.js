let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};
car.description();

// Exercise A
setTimeout(() => car.description(), 200); // Works

// Exercise B
let newCar = { ...car, year: 2023 };
newCar.description();

// c) Explanation: The delayed call uses the original values because `this` is lost in the unbound call.

// Exercise D
setTimeout(car.description.bind(car), 200);

// Exercise E
let updatedCar = { ...car, model: "Cayenne" };
updatedCar.description();

// Test if the bound value still works
setTimeout(car.description.bind(car), 200); // Still uses the original `car` values
