function Student(id, klas) {

    let nieuwStudent = this;

    nieuwStudent.studentNummer = id;
    nieuwStudent.klasNaam      = klas;
}

let Mika        = new Student('28471', 'MD2Aa');
let Mees        = new Student('29035', 'MD2Aa');
let Joey        = new Student('30226', 'MD2Aa');
let Kamil       = new Student('29575', 'MD2Ab');
let Giovanni    = new Student('26301', 'MD2Aa');
let Cornell     = new Student('30183', 'MD2Aa');
let Duneya      = new Student('29269', 'MD2Aa');
let Leroy       = new Student('30168', 'MD2Ab');
let Ruben       = new Student('29143', 'MD2Aa');

console.table(Student);
  