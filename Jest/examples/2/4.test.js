
var cityDatabase = [];
var initializeCityDatabase = () => {
    cityDatabase[0] = "Vienna";
    cityDatabase[1] = "San Juan";
};
var isCity = (city) => {
    if (cityDatabase.indexOf(city) > -1) {
        return true;
    }
    return false;
};
var clearCityDatabase = () => {
    cityDatabase = [];
};
var foodDatabase = [];
var initializeFoodDatabase = () => {
    foodDatabase[0] = 'Wiener Schnitzel';
    foodDatabase[1] = 'Mofongo';
};
var isValidCityFoodPair = (city, food) => {
    if ((cityDatabase.indexOf(city) != -1) && (foodDatabase.indexOf(food) != -1)) {
        return true;
    }
    return false;
};
// Applies to all tests in this file
beforeEach(() => {
    return initializeCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
    // Applies only to tests in this describe block
    beforeEach(() => {
        return initializeFoodDatabase();
    });

    test('Vienna <3 sausage', () => {
        expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
    });

    test('San Juan <3 plantains', () => {
        expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
    });
});
