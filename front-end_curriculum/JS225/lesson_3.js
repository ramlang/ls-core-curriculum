// Closures and Private Data

// Problems

// Question 1

// function makeCounterLogger(start) {
//   return function(end) {
//     let currentNum = start;
//     console.log(currentNum);

//     while (currentNum != end) {
//       if (start < end) {
//         currentNum += 1;
//       } else {
//         currentNum -= 1;
//       }

//       console.log(currentNum);
//     }
//   }
// }

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

// Question 2

// We'll build a simple todo list program using the techniques we've seen in this assignment. Write a makeList function that returns a new function that implements a todo list. The returned function should have the following behavior:

//     When called with an argument that is not already on the list, it adds that argument to the list.
//     When called with an argument that is already on the list, it removes the element from the list.
//     When called without arguments, it logs all items on the list. If the list is empty, it logs an appropriate message.

// function makeList() {
//   let todos = [];

//   return function(todo) {
//     if (todo === undefined) {
//       if (todos.length > 0) {
//         console.log(todos);
//       } else {
//         console.log('The list is empty');
//       }
//     } else if (todos.indexOf(todo) === -1) {
//       todos.push(todo);
//       console.log(todo + ' added!');
//     } else {
//       let index = todos.indexOf(todo);

//       todos = todos.slice(0, index) + todos.slice(index + 1);
//       console.log(todo + ' removed!');
//     }
//   }
// }

// let list = makeList();
// list();
// // The list is empty.
// list('make breakfast');
// // make breakfast added!
// list('read book');
// // read book added!
// list();
// // make breakfast
// // read book
// list('make breakfast');
// // make breakfast removed!
// list();
// // read book

///////////////////////////////////////////////////////////////////////////////

// Practice Problems: Closures

// Question 1

// function makeMultipleLister(num) {
//   return function() {
//     let currentNum = num;
//     let multiple = 1;

//     while (currentNum < 100) {
//       console.log(currentNum);
//       multiple += 1;
//       currentNum = num * multiple;
//     }
//   }
// }

// let lister = makeMultipleLister(13);
// lister();

// Question 2

// let acc = 0;

// function add(num) {
//   acc += num;
//   console.log(acc);
// }

// function subtract(num) {
//   acc -= num;
//   console.log(acc);
// }

// add(1);
// add(42);
// subtract(39);
// add(6);

// Question 3

// function startup() {
//   let status = 'ready';
//   return function() {
//     console.log('The system is ready.');
//   };
// }

// let ready = startup();
// let systemStatus = // ?

// // You can't access the value status from outside the function scope or closure.

///////////////////////////////////////////////////////////////////////////////
 
// Objects and Closures

// Problems

// Question 1

// function makeList() {
//   return {
//     items: [],
//     list() {
//       if (this.items.length === 0) return "The list is empty";

//       for (let i = 0; i < this.items.length; i += 1) {
//         console.log(this.items[i]);
//       }
//     },

//     add(item) {
//       this.items.push(item);
//       console.log(item + ' added!');
//     },

//     remove(item) {
//       let index = this.items.indexOf(item);
//       this.items.splice(index, 1);
//       console.log(item + ' removed!');
//     },
//   }
// }

// let list = makeList();
// list.add('peas');
// // = peas added!
// list.list();
// // = peas
// list.add('corn');
// // = corn added!
// list.list();
// // = peas
// // = corn
// list.remove('peas');
// // = peas removed!
// list.list();
// // = corn

// Question 2

// function makeList() {
//   let items = [];

//   return {
//     list() {
//       if (items.length === 0) return "The list is empty";

//       for (let i = 0; i < items.length; i += 1) {
//         console.log(items[i]);
//       }
//     },

//     add(item) {
//       items.push(item);
//       console.log(item + ' added!');
//     },

//     remove(item) {
//       let index = items.indexOf(item);
//       items.splice(index, 1);
//       console.log(item + ' removed!');
//     },
//   }
// }

// let list = makeList();
// list.add('peas');
// // = peas added!
// list.list();
// // = peas
// list.add('corn');
// // = corn added!
// list.list();
// // = peas
// // = corn
// list.remove('peas');
// // = peas removed!
// list.list();
// // = corn

// console.log(list.items);

///////////////////////////////////////////////////////////////////////////////

// Project: Banking with Objects and Closures

// Question 1

// Create an object named account that represents a bank account. It should contain a balance property that stores the account's current balance.

// let account = {
//   balance: 0,
// };

// Question 2

// Add a deposit method to the account object that takes a single argument, the value of the deposit. The deposit method adds the value of the argument passed to it to the account's balance, and then returns the deposit amount.

// account.deposit = function(amount) {
//   this.balance += amount;
//   return amount;
// }

// console.log(account.balance);
// // 0
// console.log(account.deposit(12));
// // 12
// console.log(account.balance);
// // 12
// console.log(account.deposit(10));
// // 10
// console.log(account.balance);
// // 22

// Quesiton 3

// Add a withdraw method to the account object that takes a single argument, the amount to withdraw. It should subtract the amount from the account's balance and return the amount subtracted.

// account.withdraw = function(amount) {
//   this.balance -= amount;
//   return amount;
// }

// account.balance = 100;
// console.log(account.balance);
// // 100
// console.log(account.withdraw(19));
// // 19
// console.log(account.balance);
// // 81

// If the account contains less than the withdrawal amount, the method should limit the withdrawal to the amount available, and return the actual amount withdrawn. This should leave the account with a balance of 0.


// account.withdraw = function(amount) {
//   if (amount > this.balance) {
//     amount = this.balance;
//   }

//   this.balance -= amount;
//   return amount;
// }

// account.balance = 81;
// console.log(account.balance);
// // 81
// console.log(account.withdraw(91));
// // 81
// console.log(account.balance);
// // 0

// Question 4

// Each account should have a record of every deposit and withdrawal applied to it. To do this, add a property named transactions to account that contains an array of transactions, each of which is an object with type and amount properties.

// let account = {
//   balance: 0,
//   transactions: [],
//   deposit(amount) {
//     this.transactions.push({type: 'deposit', amount: amount});
//     this.balance += amount;
//     return amount;
//   },

//   withdraw(amount) {
//     this.transactions.push({withdraw: amount});
//     if (amount > this.balance) {
//       amount = this.balance;
//     }

//     this.balance -= amount;
//     return amount;
//   },
// };

// console.log(account.deposit(23));
// // 23
// console.log(account.transactions);
// // [{...}]
// console.log(account.transactions[0]);
// // {type: "deposit", amount: 23}

// Question 5

// We want to create more than one account. Move the account creation code to a function named makeAccount that returns a new account object.

// function makeAccount() {
//   return {
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.transactions.push({type: 'deposit', amount: amount});
//       this.balance += amount;
//       return amount;
//     },

//     withdraw(amount) {
//       this.transactions.push({withdraw: amount});
//       if (amount > this.balance) {
//         amount = this.balance;
//       }

//       this.balance -= amount;
//       return amount;
//     },
//   };
// }

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

// Question 6

// We also need an object to manage accounts: a bank. Create a function that returns an object that represents a bank. The bank should have a property named accounts that represents a list of accounts.

// function makeBank() {
//   return {
//     accounts: [],
//   }
// }

// let bank = makeBank();
// console.log(bank.accounts);
// // []

// Question 7

// Add a new method named openAccount to the object returned by makeBank. It should create a new account, add it to the bank's accounts collection, and return the new account. Each new account should have a unique account number, starting at 101; each account number should be one greater than the previous account created.

// function makeAccount(number) {
//   return {
//     number,
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({type: "deposit", amount: amount});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance;
//       }

//       this.balance -= amount;
//       this.transactions.push({type: "withdraw", amount: amount});
//       return amount;
//     }
//   };
// }

// function makeBank() {
//   return {
//     accounts: [],
//     openAccount() {
//       let number = this.accounts.length + 101;
//       let account = makeAccount(number);
//       this.accounts.push(account);
//       return account;
//     },
//   };
// }

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {number: 101, balance: 0, transactions: Array[0]}
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102

// Question 8

// Add a new method to the bank object that transfers money from one account to another.

// function makeAccount(number) {
//   return {
//     number,
//     balance: 0,
//     transactions: [],
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({type: "deposit", amount: amount});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > this.balance) {
//         amount = this.balance;
//       }

//       this.balance -= amount;
//       this.transactions.push({type: "withdraw", amount: amount});
//       return amount;
//     }
//   };
// }

// function makeBank() {
//   return {
//     accounts: [],
//     openAccount() {
//       let number = this.accounts.length + 101;
//       let account = makeAccount(number);
//       this.accounts.push(account);
//       return account;
//     },
//     transfer(source, destination, amount) {
//       source.withdraw(amount);
//       destination.deposit(amount);
//       return amount;
//     }
//   };
// }

// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance);
// // 3
// console.log(destination.balance);
// // 7

// Question 9

// Change the code so that users can access the account balance, account number, and transactions list by calling methods, but not by directly accessing those properties.

// function makeAccount(number) {
//   let balance = 0;
//   let accountNumber = number;
//   let transactions = [];

//   return {
//     number() {
//       return accountNumber;
//     },

//     balance() {
//       return balance;
//     },

//     transactions() {
//       return transactions;
//     },

//     deposit(amount) {
//       balance += amount;
//       transactions.push({type: "deposit", amount: amount});
//       return amount;
//     },

//     withdraw(amount) {
//       if (amount > balance) {
//         amount = balance;
//       }

//       this.balance -= amount;
//       this.transactions.push({type: "withdraw", amount: amount});
//       return amount;
//     },
//   };
// }

// function makeBank() {
//   return {
//     accounts: [],
//     openAccount() {
//       let number = this.accounts.length + 101;
//       let account = makeAccount(number);
//       this.accounts.push(account);
//       return account;
//     },
//     transfer(source, destination, amount) {
//       source.withdraw(amount);
//       destination.deposit(amount);
//       return amount;
//     }
//   };
// }

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.balance());
// // 0
// console.log(account.deposit(17));
// // 17
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number());
// // 102
// console.log(account.transactions());
// // [{...}]

// Question 10

// Change the code so that users can no longer access the list of accounts.

// function makeBank() {
//   let accounts = [];
//   return {
//     openAccount() {
//       let number = accounts.length + 101;
//       let account = makeAccount(number);
//       accounts.push(account);
//       return account;
//     },
//     transfer(source, destination, amount) {
//       source.withdraw(amount);
//       destination.deposit(amount);
//       return amount;
//     }
//   };
// }


// let bank = makeBank();
// console.log(bank.accounts);
// // undefined