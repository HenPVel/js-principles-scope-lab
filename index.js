// // Write your solution in this file!
// var customerName = 'bob'

// function upperCaseCustomerName() {
//     // debugger
//     var customerName = 'bob'
//     x = customerName.toUpperCase()
//     var customerName = x
//     return customerName
// }

// upperCaseCustomerName()


var customerName = 'bob'
const leastFavoriteCustomer = 'henry'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
  return customerName
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'steven'
}