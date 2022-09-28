class Account {
    constructor(balance, titular, n_cuenta, fechac) {
        this._balance = balance;
    }
    
    get balance() {
        return this._balance;
    }


    set titular(titular) {
        this._titular = titular;
    }

    set fechac(fechac) {
        this._fechac = fechac;
    }
    
    set balance(balance) {
        this._balance = balance;
    }
}

class SavingsAccount extends Account {
    constructor(balance, deposito, retiro ) {
        super(balance);
        this._balance = balance;
        this._deposito = deposito;
        this._retiro = retiro;
    }

    set balance(balance) {
        this._balance = balance;
    }

    set deposito(deposito) {
        this._deposito = deposito;
    }
    set retiro(retiro) {         
        this._retiro = retiro;
    }                                 
    get balance() {
        return this._balance;
    }

    get deposito() {
        return this._deposito;
    }

    get retiro() {
        return this._retiro;
    }

    consignar(){
        return `Su consignacion de ${this._deposito} ha sido exitoso, su nuevo saldo es de ${this._balance + this._deposito}`;
    }

    retirar(){
        if (this._balance == 0 || this._balance < this._retiro) {
            return`No hay saldo disponible para retiros. por pobre xd`;
        } else {
            return `Su retiro de ${this._retiro} ha sido exitoso, su nuevo saldo es de ${this._balance - this._retiro}`;
        }
    }
}

class ChekingAccount extends Account {
    constructor(balance, interestRate) {
        super(balance);
        this._balance = balance;
        this._interestRate = interestRate;
    }

    set balance(balance) {
        this._balance = balance;
    }
    get balance() {
        return this._balance;
    }
    
}

const ahorros = new SavingsAccount(20000, 400000, 2500000);

console.log(ahorros.consignar());
console.log(ahorros.retirar());