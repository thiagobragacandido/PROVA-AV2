class veiculo {
    construtor(rodas,combustivel) {
        this.rodas = rodas;
        this.combustivel = combustivel;
    }
    acelerar() {
        console.log('acelerou');
    }
}
class Moto extends veiculo {
    empinar(){
        console.log(rodas,combutivel);
        this.capacete = capacete;
    }

    empinar() {
        console.log('Moto empinou com ' + this.rodas + ' rodas');
    }
}
const honda = new Moto(2);
const Bmw = new veiculo(4);
