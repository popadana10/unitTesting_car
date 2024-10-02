class CarStorage {
  constructor(jsondata) {
    if (!jsondata) {
      throw new Error("data storage missing");
    }
    this.cars = jsondata;
  }

  has_info(searchKey) {
    if (!searchKey) return false;
    const car = this.cars.find((item) => item.id === searchKey);
    return car?.details && Object.keys(car.details).length > 0;
  }

  get_info(searchKey) {
    if (!searchKey) return null;
    const car = this.cars.find((item) => item.id === searchKey);
    return car?.details ?? null;
  }

  get_All_cars_By_type(searchValue) {
    if (!searchValue) {
      throw new Error("missing parameter");
    }
    return this.cars.filter((item) => item.type === searchValue);
  }

  get_Price(id) {
    const car = this.cars.find((item) => item.id === id);
    if (!car) {
      throw new Error("nothing found with given searchValue");
    }
    return car.price;
  }

  get_car_colors(searchKey) {
    const car = this.cars.find((item) => item.id === searchKey);
    return car?.colors ?? [];
  }
}

module.exports = CarStorage;
