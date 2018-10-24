// let balance = 500.00;

class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction{
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {
    if (this.isAllowed(this)) {
      this.account.addTransaction(this);
    }
  }

  isAllowed(transaction) {
    return (this.account.balance + transaction.value < 0 ? false : true);
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }
}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}




// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account('snow-patrol');
t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(120.00, myAccount);
t3.commit();
console.log("Transaction 3: ", t3);

console.log('Balance:', myAccount.balance);
