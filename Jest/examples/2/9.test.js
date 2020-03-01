test('the test', () => {
    const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');

    const arg1 = 50;
    myMockFn(arg1);

    // The mock function was called at least once
    expect(myMockFn).toHaveBeenCalled();

    // The mock function was called at least once with the specified args
    expect(myMockFn).toHaveBeenCalledWith(arg1);

    // The last call to the mock function was called with the specified args
    expect(myMockFn).toHaveBeenLastCalledWith(arg1);


    // The mock function was called at least once
    expect(myMockFn.mock.calls.length).toBeGreaterThan(0);

    // The mock function was called at least once with the specified args
    expect(myMockFn.mock.calls).toContainEqual([arg1]);

    // The last call to the mock function was called with the specified args
    expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1]).toEqual([
        arg1
    ]);

    // The first arg of the last call to the mock function was 50
    // (note that there is no sugar helper for this specific of an assertion)
    expect(myMockFn.mock.calls[myMockFn.mock.calls.length - 1][0]).toBe(50);

    // A snapshot will check that a mock was invoked the same number of times,
    // in the same order, with the same arguments. It will also assert on the name.
    expect(myMockFn.mock.calls).toEqual([[arg1]]);
    expect(myMockFn.getMockName()).toBe('add42');
});