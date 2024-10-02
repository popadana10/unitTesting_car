const CarStorage = require("../CarStorage");
const data = require("../datastorage.json");

describe("CarStorage Class", () => {
  let storage;

  beforeEach(() => {
    storage = new CarStorage(data);
  });

  test("constructor throws error if no data is passed", () => {
    expect(() => new CarStorage()).toThrow("data storage missing");
  });

  test("has_info returns true if car has details", () => {
    expect(storage.has_info(1)).toBe(true);
  });

  test("has_info returns false if car does not exist or has no details", () => {
    expect(storage.has_info(5)).toBe(false);
    expect(storage.has_info(999)).toBe(false);
  });

  test("get_info returns details object if car exists", () => {
    expect(storage.get_info(1)).toEqual({
      powerSource: "hydrogen",
      consumptionPer100km: 5,
      comments: "-",
    });
  });

  test("get_info returns null if car does not exist", () => {
    expect(storage.get_info(999)).toBeNull();
  });

  test("get_All_cars_By_type returns cars of given type", () => {
    const sedans = storage.get_All_cars_By_type("sedan");
    expect(sedans.length).toBe(2);
    expect(sedans[0].type).toBe("sedan");
  });

  test("get_All_cars_By_type throws error if no type is passed", () => {
    expect(() => storage.get_All_cars_By_type()).toThrow("missing parameter");
  });

  test("get_Price returns price of the car", () => {
    expect(storage.get_Price(1)).toBe(10);
  });

  test("get_Price throws error if car is not found", () => {
    expect(() => storage.get_Price(999)).toThrow(
      "nothing found with given searchValue"
    );
  });

  test("get_car_colors returns colors of the car", () => {
    expect(storage.get_car_colors(1)).toEqual(["red", "green", "blue"]);
  });

  test("get_car_colors returns empty array if car or colors not found", () => {
    expect(storage.get_car_colors(999)).toEqual([]);
  });
});
