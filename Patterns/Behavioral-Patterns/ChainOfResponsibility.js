// Цепочка обязанностей — позволяет передавать запросы последовательно по цепочке обработчиков.
// Каждый последующий обработчик решает, может ли он обработать запрос сам и стоит ли передавать запрос дальше по цепи.

class MyMoney {
  setNext(account) {
    this.success = account;
  }

  pay(amount) {
    if (this.canPay(amount)) {
      console.log(`You can buy TV for ${amount} using ${this.name}`);
    } else if (this.success) {
      console.log(`You can not buy TV using ${this.name}. Wait...`);
      this.success.pay(amount);
    } else {
      console.log("You can not buy TV. Go home!");
    }
  }

  canPay(amount) {
    return this.sum >= amount;
  }
}

class Cash extends MyMoney {
  constructor(sum) {
    super();
    this.name = "cash";
    this.sum = sum;
  }
}

class Card extends MyMoney {
  constructor(sum) {
    super();
    this.name = "card";
    this.sum = sum;
  }
}

class Bank extends MyMoney {
  constructor(sum) {
    super();
    this.name = "bank";
    this.sum = sum;
  }
}

const cash = new Cash(100);
const card = new Card(200);
const bank = new Bank(300);

cash.setNext(card);
card.setNext(bank);

// cash.pay(59);
// cash.pay(159);
cash.pay(259);
