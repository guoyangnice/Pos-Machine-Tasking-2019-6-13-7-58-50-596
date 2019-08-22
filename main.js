const goodInfo =
    [
        { "id": "0001", "name": "Coca Cola", "price": 3 },
        { "id": "0002", "name": "Diet Coke", "price": 4 },
        { "id": "0003", "name": "Pepsi-Cola", "price": 5 },
        { "id": "0004", "name": "Mountain Dew", "price": 6 },
        { "id": "0005", "name": "Dr Pepper", "price": 7 },
        { "id": "0006", "name": "Sprite", "price": 8 },
        { "id": "0007", "name": "Diet Pepsi", "price": 9 },
        { "id": "0008", "name": "Diet Mountain Dew", "price": 10 },
        { "id": "0009", "name": "Diet Dr Pepper", "price": 11 },
        { "id": "0010", "name": "Fanta", "price": 12 }
    ]
const itemsId = ['0001', '0003', '0005', '0003'];

function createReceipt(itemsId) {
    const staticsItems = countItems(itemsId);
    const productInfo = getInfoByItemsId(staticsItems);
    const totalPrice = countTotalPrice(productInfo);
    const print = printReceipt(productInfo);

    return print;
}

//统计items的数量
function countItems(itemsId) {
    let result = [];
    for (let i = 0; i < itemsId.length; i++) {
        let index = result.findIndex(element => itemsId[i] === element.id);
        if (index === -1) {
            result.push({
                id: itemsId[i],
                count: 1
            });
        } else {
            result[index].count++;
        }
    }
    return result;
}

//取得商品信息
function getInfoByItemsId(countInfo) {
    let result = [];
    for (let i = 0; i < countInfo.length; i++) {
        for (let j = 0; j < goodInfo.length; j++) {
            if (countInfo[i].id == goodInfo[j].id) {
                result.push({
                    id: countInfo[i].id,
                    name: goodInfo[j].name,
                    price: goodInfo[j].price,
                    count: countInfo[i].count
                });
            }
        }
    }
    return result;
}

//计算总价格
function countTotalPrice(productInfo) {
    let totalPrice = 0;
    for(let i = 0; i< productInfo.length;i++){
        let price = productInfo[i].price;
        let count = productInfo[i].count;
        totalPrice += price * count;
    }
    return totalPrice;
}

function printReceipt(productInfo){
    let result = "Receipts\n----------\n";
    for(let i = 0; i< productInfo.length;i++){
        let name = productInfo[i].name;
        let price = productInfo[i].price;
        let count = productInfo[i].count;
        result += name + "\t" + price + "\t" + count + "\n";
    }
    let totalPrice = countTotalPrice(productInfo);
    result += "----------\n"+"Price:" + totalPrice;
    return result;
}

console.log(createReceipt(itemsId));


module.exports = createReceipt;