class Poligono{
    constructor(lados, base, altura, perimetro, area){
        this._base = base;
        this._altura = altura;
        this._lados = lados;
        this._perimetro = perimetro;
        this._area = area;
    }

    get base(){
        return this.base;
    }

    get altura(){
        return this.altura;
    }

    get lados(){
        return this._lados;
    }

    get perimetro(){
        return this._perimetro;
    }

    get area(){
        return this._area;
    }

    set base(base){
        this._base = base;
    }

    set altura(altura) {
        this._altura = altura;
    }

    set lados(lados) {
        this._lados = lados;
    }

    set perimetro(perimetro) {
        this._perimetro = perimetro;
    }

    set area(area) {
        this._area = area;
    }

    perimetro(){
    }

    area(){
    }
}

class Cuadrado extends Poligono{
    constructor(lados, base, altura, perimetro, area, lado1, lado2) {
        super(lados, base, altura, perimetro, area);
        this._base = base;
        this._altura = altura;
        this._lados = lados;
        this._perimetro = perimetro;
        this._area = area;
        this._lado1 = lado1;
        this._lado2 = lado2;
    }

    get base(){
        return this.base;
    }

    get altura(){
        return this.altura;
    }

    get lados(){
        return this._lados;
    }

    get perimetro(){
        return this._perimetro;
    }

    get area(){
        return this._area;
    }

    get lado1(){
        return this._lado1;
    }

    get lado2(){
        return this._lado2;
    }

    set base(base){
        this._base = base;
    }

    set altura(altura) {
        this._altura = altura;
    }

    set lados(lados) {
        this._lados = lados;
    }

    set lado1(lado1) {
        this._lado1 = lado1;
    }

    set lado2(lado2) {
        this._lado2 = lado2;
    }

    set perimetro(perimetro) {
        this._perimetro = perimetro;
    }

    set area(area) {
        this._area = area;
    }

    Perimetro(){
        return this._perimetro = 4 * this._base;
    }

    Area(){
        return this._area = Math.pow(this._base,2);
    }
}

class Rectangulo extends Poligono{
    constructor(lados, base, altura, perimetro, area, lado1, lado2) {
        super(lados, base, altura, perimetro, area);
        this._base = base;
        this._altura = altura;
        this._lados = lados;
        this._perimetro = perimetro;
        this._area = area;
        this._lado1 = lado1;
        this._lado2 = lado2;
    }

    get base(){
        return this.base;
    }

    get altura(){
        return this.altura;
    }

    get lados(){
        return this._lados;
    }

    get perimetro(){
        return this._perimetro;
    }

    get area(){
        return this._area;
    }

    get lado1(){
        return this._lado1;
    }

    get lado2(){
        return this._lado2;
    }

    set base(base){
        this._base = base;
    }

    set altura(altura) {
        this._altura = altura;
    }

    set lados(lados) {
        this._lados = lados;
    }

    set lado1(lado1) {
        this._lado1 = lado1;
    }

    set lado2(lado2) {
        this._lado2 = lado2;
    }

    set perimetro(perimetro) {
        this._perimetro = perimetro;
    }

    set area(area) {
        this._area = area;
    }

    Perimetro(){
        return this._perimetro = 2 *this._base + 2 *this._altura;
    }

    Area(){
        return this._area = this._base * this._altura;
    }
}

class Triangulo extends Poligono{
    constructor(lados, base, altura, perimetro, area, lado1, lado2, lado3) {
        super(lados, base, altura, perimetro, area);
        this._base = base;
        this._altura = altura;
        this._lados = lados;
        this._perimetro = perimetro;
        this._area = area;
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
    }

    get base(){
        return this.base;
    }

    get altura(){
        return this.altura;
    }

    get lados(){
        return this._lados;
    }

    get perimetro(){
        return this._perimetro;
    }

    get area(){
        return this._area;
    }

    get lado1(){
        return this._lado1;
    }

    get lado2(){
        return this._lado2;
    }

    get lado3(){
        return this._lado3;
    }

    set base(base){
        this._base = base;
    }

    set altura(altura) {
        this._altura = altura;
    }

    set lados(lados) {
        this._lados = lados;
    }

    set lado1(lado1) {
        this._lado1 = lado1;
    }

    set lado2(lado2) {
        this._lado2 = lado2;
    }

    set lado3(lado3) {
        this._lado3 = lado3;
    }

    set perimetro(perimetro) {
        this._perimetro = perimetro;
    }

    set area(area) {
        this._area = area;
    }

    Perimetro(){
        return this._perimetro = this._lado1 + this._lado2 + this._lado3;
    }

    Area(){
        return this._area = (this._lado2 * this._altura)/2;
    }
}

const cd = new Cuadrado (0, 10);
console.log(cd.Perimetro());
console.log(cd.Area());
console.log()

const rec = new Rectangulo(0, 43, 65);
console.log(rec.Perimetro());
console.log(rec.Area());
console.log()

const tr = new Triangulo(0, 0, 19, 0, 0, 13, 13, 13)
console.log(tr.Perimetro());
console.log(tr.Area());