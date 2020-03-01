test('the test', () => {
    //mocking constructor
    const myMock = jest.fn();
    //constructor
    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();

    console.log(myMock.mock.instances);
    // The function was called exactly once
    expect(myMock.mock.calls.length).toBe(2);
});