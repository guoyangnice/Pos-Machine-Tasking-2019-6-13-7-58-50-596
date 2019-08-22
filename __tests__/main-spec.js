const createReceipt = require('../main');

it('should return Total receipt', () => {
    expect(createReceipt(['0001', '0003', '0005', '0003']))
        .toBe(20);
});