/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


let calculateTotalSpentByCategory = (transactions) => {
  let myCart = new Map();
  let output = [];
  transactions.forEach((trans) => {
    if(myCart.has(trans.category)) {
      myCart.set(trans.category, myCart.get(trans.category) + trans.price);
    }else{
      myCart.set(trans.category, trans.price);
    }
  })

  myCart.forEach((val, key) => {
    output.push({[key] : val})
  })
  
  return output;
}

const transactions = [
  {itemName: "Chips", category : "Eatables", price : 20, timestamp : new Date().getTime()},
  {itemName: "Mangoes", category : "Fruits", price : 150, timestamp : new Date().getTime()},
  {itemName: "Cough Syrup", category : "Medicines", price : 100, timestamp : new Date().getTime()},
  {itemName: "Pen", category : "Stationary", price : 50, timestamp : new Date().getTime()},
  {itemName: "Chocolates", category : "Eatables", price : 210, timestamp : new Date().getTime()},
  {itemName: "Calpol", category : "Medicines", price : 100, timestamp : new Date().getTime()}
]


console.log(calculateTotalSpentByCategory(transactions));

