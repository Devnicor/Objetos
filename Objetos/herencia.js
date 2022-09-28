class Usuario {
  constructor(id, nombre, edad) {
    this._id = id;
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Estudiante extends Usuario {
  constructor(id, nombre, edad, ficha, programa) {
    super(id, nombre, edad);
    this.ficha = ficha;
    this.programa = programa;
  }
}

var e1 = new Estudiante(111, "Juan Perez", 18, 2237756, "adsi");
var e2 = new Estudiante(112, "Ana Herrera", 18, 2237756, "adsi");

class Moto{
    constructor(placa, estudiante){
    this._placa = placa;
    this._estudiante = estudiante;
    }
}

var m1 = new Moto("se-123", e1);
console.log(m1);

class Grupo{
    constructor(codGrupo, estudiantes){
        this._codGrupo = codGrupo;
        this._estudiantes = estudiantes;
    }

    incorporarEstudiante(estudiante){
        this._estudiantes.push(estudiante);
    }
}

var g1 = [];
var grupo1 = new Grupo(909, g1);
console.log(grupo1);
grupo1.incorporarEstudiante(e1);
grupo1.incorporarEstudiante(e2);
console.log(grupo1);