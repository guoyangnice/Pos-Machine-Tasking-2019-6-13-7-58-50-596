const createReceipt = require('../main');

it('should return Total receipt', () => {
    expect(createReceipt(['0001', '0003', '0005', '0003']))
        .toBe("Receipts\n----------\nCoca Cola\t3\t1\nPepsi-Cola\t5\t2\nDr Pepper\t7\t1\n----------\nPrice:20");
});