import { DioAccount } from "./DioAccount";

export class NewTypeAccount extends DioAccount {
  deposit = (value: number): void => {
    if (this.validateStatus()) {
      const bonusValue = value + 10;
      this.balance += bonusValue;
      console.log(`Depósito especial! Você depositou ${value} e recebeu +10 de bônus. Saldo: ${this.balance}`);
    }
  };
}