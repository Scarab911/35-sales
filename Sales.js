class Sales {
    constructor(name, currency) {
        this.clientName = name;
        this.currency = currency;
        this.productsData = [];
        this.percentOfProfit = 0;

        this.totalItemsSold = 0;
    }
    addProduct(productName, quantity, price) {
        this.productsData.push({ productName, quantity, price, sellPrice: price })
    }
    productsList() {
        let count = 0;
        let price = 0;
        for (const item of this.productsData) {
            count++
            price = item.price / 100;
            console.log(`${count}. ${item.quantity} ${item.productName} bought for ${price.toFixed(2)} ${this.currency}!`)
        }
    }
    productsForSaleList() {
        let count = 0;
        let sellPrice = 0;
        for (const item of this.productsData) {
            count++
            sellPrice = item.sellPrice / 100;
            console.log(`${count}. ${item.quantity} ${item.productName} available for ${sellPrice.toFixed(2)} ${this.currency}!`)
        }
    }
    profitFromSale(profitInPercent) {
        this.percentOfProfit = profitInPercent;
        this.sellingPrice()
    }
    sellingPrice() {
        for (const item of this.productsData) {
            item.sellPrice = Math.round(item.price + item.price * this.percentOfProfit / 100);
        }
    }

    spentForProducts(print = true) {
        let totalSpent = 0;
        for (const item of this.productsData) {

            totalSpent += item.price * item.quantity;
        }
        if (print) {

            console.log(`You spent ${(totalSpent / 100).toFixed(2)} ${this.currency} for all products.`);
        }
        return totalSpent
    }

    turnover(print = true) {
        let possibleTurnover = 0;
        for (const item of this.productsData) {
            possibleTurnover += item.quantity * item.sellPrice;
        }
        if (print) {
            console.log(`You have got total ${(possibleTurnover / 100).toFixed(2)} ${this.currency} after sales.`);
        }
        return possibleTurnover;
    }

    totalAverageProfit() {
        const spent = this.spentForProducts(false);
        const earned = this.turnover(false);
        for (const item of this.productsData) {
            this.totalItemsSold += item.quantity;
        }
        const averageProfit = (earned - spent) / this.totalItemsSold;
        console.log(`Average profit per item sold is ${(averageProfit / 100).toFixed(2)} ${this.currency} !`);
    }
}

module.exports = Sales;