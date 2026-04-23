export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  protected balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Você depositou ${value}. Novo saldo: ${this.balance}`);
    }
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Você sacou ${value}. Novo saldo: ${this.balance}`);
    } else {
      console.log("Saque inválido: Verifique o status da conta ou o saldo disponível.");
    }
  };

  getBalance = (): void => {
    console.log(`Saldo atual: ${this.balance}`);
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta inválida');
  };
}