import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { NewTypeAccount } from './class/NewTypeAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);
companyAccount.getLoan(1000);
companyAccount.deposit(500);

const bonusAccount: NewTypeAccount = new NewTypeAccount('Maria', 30);
bonusAccount.deposit(100); 

