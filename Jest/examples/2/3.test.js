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
beforeAll(() => {
    return initializeCityDatabase();
});

afterAll(() => {
    return clearCityDatabase();
});

test('city database has Vienna', () => {
    expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
    expect(isCity('San Juan')).toBeTruthy();
});
