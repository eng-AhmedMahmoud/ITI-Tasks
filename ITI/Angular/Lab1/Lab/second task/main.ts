class Account {
  id: number;
  name: string;
  balance: number;
}
interface IAccount {
  id: number;
  name: string;
  balance: number;
}

class SavingAccount extends Account implements IAccount {
  interest_rate: number;
  constructor(id: number, name: string, balance: number) {
    super();
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}

class CurrentAccount extends Account implements IAccount {
  interest_rate: number;
  constructor(id: number, name: string, balance: number) {
    super();
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
}