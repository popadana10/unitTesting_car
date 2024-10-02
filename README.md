# Car Storage

## Constructor

### `constructor(jsondata)`

Initializes the CarStorage object with the given data.

**Parameters:**

- `jsondata`: JSON data to initialize the storage.

**Throws:**

- If `jsondata` is missing, it throws `data storage missing`.

## Methods

### `get_total_price_of_cars_by_model(searchValue)`

Calculates the total price of cars with the specified model.

**Parameters:**

- `searchValue`: Model name to search for.

**Returns:**

- Cumulative price of cars matching the model.

**Throws:**

- `nothing found with given searchValue` if no cars match the search value.
- `missing parameter` if the `searchValue` parameter is missing.

---

### `get_All_cars_By_model(searchValue)`

Returns all cars that match the given model.

**Parameters:**

- `searchValue`: Model name to search for.

**Returns:**

- Array of cars matching the model, or an empty array if none are found.

**Throws:**

- `missing parameter` if the `searchValue` parameter is missing.

---

### `has_details(searchKey)`

Checks if a car with a given ID has a details object.

**Parameters:**

- `searchKey`: The ID of the car.

**Returns:**

- `true` if the car has a details object, otherwise `false`.

---

### `get_a_car_matching_id(searchKey)`

Returns the car object with the specified ID.

**Parameters:**

- `searchKey`: The ID of the car to search for.

**Returns:**

- The car object or `null` if no match is found.

**Throws:**

- `missing parameter` if the `searchKey` parameter is missing.

---

### `get_Price(id)`

Returns the price of the car with the given ID.

**Parameters:**

- `id`: The ID of the car.

**Returns:**

- Price of the car.

**Throws:**

- `nothing found with given searchValue` if no car matches the ID.

## Project Structure

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Popa_Dana_car.git
   cd Popa_Dana_car
   ```
