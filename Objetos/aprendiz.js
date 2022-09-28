class Persona{
    constructor(nombre, documento){
        this._nombre = nombre;
        this._documento = documento;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get documento(){
        return this._documento;
    }

    set documento(documento){
        this._documento = documento;
    }
}

const ob = new Persona();
console.log(typeof(ob));

class Aprendiz extends Persona{
    constructor(nombre, documento, ficha, programa){
        super(nombre, documento);
        this._ficha = ficha;
        this._programa = programa;
    }

    get ficha(){
        return this._ficha;
    }

    set ficha(ficha){
        this._ficha = ficha;
    }

    get programa(){
        return this.programa;
    }

    set programa(programa){
        this.programa = programa;
    }

    datosCompletos(){
        return `${this._ficha} ${this._programa}
                ${this.nombre} ${this.documento}`
    }
}

const ap1 = new Aprendiz("Juan Flores", 54321, 2453232, "ADSI");
console.log(ap1.nombre);
console.log(ap1.programa);
console.log(ap1.datosCompletos);