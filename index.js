// čia dėti visą pavyzdinį kodą, kuris turėtų paaiškinti, kaip naudotis jūsų sukurtu kodu

const Sales = require("./Sales");

const salesMan = new Sales(`Sequin Madness`, `EUR`);

salesMan.addProduct('Pillow', 10, 230)
salesMan.addProduct('Back pack', 10, 560)
salesMan.addProduct('Waist bag', 10, 605)
salesMan.addProduct('Iphone 7 Plus cover', 10, 430)
salesMan.addProduct('Unicorn plush toy', 10, 375)

// salesMan.productsList()
// // 1. Pillow available for 2.30 EUR!
// // 2. Back pack available for 5.60 EUR!
// // 3. Waist bag available for 6.05 EUR!
// // 4. Iphone 7 Plus cover available for 4.30 EUR!
// // 5. Unicorn plush toy available for 3.75 EUR!

salesMan.profitFromSale(50)
//KOMENTARAS. Adds expected profit from sale in percent to every item in list!
salesMan.productsForSaleList()
// 1. Pillow available for 3.45 EUR!
// 2. Back pack available for 8.40 EUR!
// 3. Waist bag available for 9.07 EUR!
// 4. Iphone 7 Plus cover available for 6.45 EUR!
// 5. Unicorn plush toy available for 5.63 EUR!

// salesMan.profitFromSale(100)

// salesMan.productsForSaleList()
// 1. Pillow available for 4.60 EUR!
// 2. Back pack available for 11.20 EUR!
// 3. Waist bag available for 12.10 EUR!
// 4. Iphone 7 Plus cover available for 8.60 EUR!
// 5. Unicorn plush toy available for 7.50 EUR!
salesMan.spentForProducts()
//You spent 1k EUR for products.

salesMan.turnover()
//You have got total 10k EUR after sales.

salesMan.totalAverageProfit()
console.log(salesMan);