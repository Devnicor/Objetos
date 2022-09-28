class Publicacion {
    constructor(titulo ,precio){
        this._titulo = titulo;
        this._precio = precio;
    }

    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    set precio(precio) {
        this._precio = precio;
    }
}

class Libro extends Publicacion{
    constructor(titulo ,precio, paginas){
        super(titulo,precio);
        this._titulo = titulo;
        this._precio = precio;
        this._paginas = paginas;
    }

    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }

    get paginas(){
        return this._paginas;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    set precio(precio) {
        this._precio = precio;
    }
    
    set paginas(paginas) {
        this._paginas = paginas;
    }

    mostrarLibro(){
        return `El libro ${this._titulo} posee ${this.paginas} y está disponible por el valor de ${this._precio}` 
    }

}

class DiscoLibro extends Publicacion{
    constructor(titulo ,precio, duracion){
        super(titulo,precio);
        this._titulo = titulo;
        this._precio = precio;
        this._duracion = duracion;
    }

    get titulo(){
        return this._titulo;
    }

    get precio(){
        return this._precio;
    }

    get duracion(){
        return this._duracion;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    set precio(precio) {
        this._precio = precio;
    }
    
    set duracion(duracion) {
        this._duracion = duracion;
    }

    mostrarDisco(){
        return `El audio libro ${this._titulo} posee una duracion de ${this._duracion} y está disponible por el valor de ${this._precio}` 
    }
}

const Calculo = new Libro('Algebra de Baldor', '576 paginas', 50000 )
const Cd = new DiscoLibro('It','4,5 horas', 70000)

console.log(Calculo.mostrarLibro());
console.log(Cd.mostrarDisco());