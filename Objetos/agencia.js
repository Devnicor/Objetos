class Vehiculo {
    constructor(numeroMotor,marca, año, precio){
        this._numeroMotor = numeroMotor;
        this._marca = marca;
        this._año = año;
        this._precio = precio;
    }

    get numeroMotor(){
        return this._numeroMotor;
    }

    get marca(){
        return this._marca;
    }

    get año(){
        return this._año;
    }

    get precio(){
        return this._precio;
    }

    set numeroMotor(numeroMotor){
        this._numeroMotor = numeroMotor;
    }

    set marca(marca){
        this._marca = marca;
    }

    set año(año){
        this._año = año;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
       return `Este auto de marca: ${this._marca} del año: ${this._año} con un numero de motor${this._numeroMotor} cuesta ${this._precio}`;
    }
}

class Compactos extends Vehiculo{
    constructor(numeroMotor,marca, año, precio, capacidadComp,){
        super(numeroMotor,marca, año, precio);
        this._capacidadComp = capacidadComp;
    }

    get capacidadComp(){
        return this.capacidadComp;
    }

    set capacidadcomp(capacidadcomp){
        this._capacidadComp = capacidadComp;
    }

}

class Lujo extends Vehiculo{
    constructor(numeroMotor,marca, año, precio, capacidadLujo){
        super(numeroMotor,marca, año, precio);
        this._capacidadLujo = capacidadLujo;
    }

    get capacidadLujo(){
        return this.capacidadLujo;
    }

    set capacidadLujo(capacidadLujo){
        this._capacidadLujo = capacidadLujo;
    }

}

class Vagoneta extends Vehiculo{
    constructor(numeroMotor,marca, año, precio, capacidadVag){
        super(numeroMotor,marca, año, precio);
        this._capacidadVag = capacidadVag;
    }

    get capacidadVag(){
        return this.capacidadVag;
    }

    set capacidadVag(capacidadVag){
        this._capacidadVag = capacidadVag;
    }

}

class Camioneta extends Vehiculo{
    constructor(numeroMotor,marca, año, precio, capacidadCarga, ejes){
        super(numeroMotor,marca, año, precio);
        this._capacidadCarga = capacidadCarga;
        this._ejes = ejes;
    }

    get capacidadCarga(){
        return this._capacidadCarga;
    }

    get ejes(){
        return this.ejes;
    }

    set capacidadcomp(capacidadCarga){
        this._capacidadCarga = capacidadCarga;
    }

    set ejes(ejes){
        this._ejes = ejes;
    }   

}

let Spark = new Compactos('52WVC10338', 'Chevrolet', 2017, 1200000, 5);
let Phamtom = new Lujo('32CDS64102', 'Rolls-Royce', 2020, 150000000, 6);
let Probox = new Vagoneta('91GRT84652', 'Toyota', 2019, 30000000, 8);
let KingRanch = new Camioneta('28LPE65231', 'Ford', 2022, 266368640, 1509, 4);

console.log(Spark.toString());
console.log();
console.log(Phamtom.toString());
console.log();
console.log(Probox.toString());
console.log();
console.log(KingRanch.toString());