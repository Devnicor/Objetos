class Producto{
    constructor(nombre, precio, serial){
        this._nombre=nombre;
        this._precio=precio;
        this._serial=serial;
    }    
    get nombre(){
        return this._nombre;
    }    

    set nombre(nombre){
        this._nombre=nombre;
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        this._precio=precio;
    }

    get serial(){
        return this._serial
    }

    set serial(serial){
        this._serial=serial;
    }
}

class Aprendiz{
    constructor(nombre, documento, telefono, correo){
        this._nombre=nombre;
        this._documento=documento;
        this._correo=correo;
        this._telefono=telefono;
    }
}

let prod1=new Producto('computador',4000000);
console.log(prod1.nombre);
prod1.nombre="computador portatil";
prod1.precio=3200000
console.log(prod1.nombre);
console.log(prod1.precio);

let prod2= new Producto ("Smartphone", 1200000, "AL05634-1")
console.log(prod2);