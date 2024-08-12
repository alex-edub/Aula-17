//Criar um objeto
//Criar pelo menos 5 atributos desse objeto
//Criar pelo menos 3 funções para esse objeto
//Alterar um valor desse objeto através de uma dessas funções
//Imprimir os valores desses objeto.

var computador = {
    marca: 'Dell',
    modelo: 'i96ba',
    processador: 'i7',
    ram: '16GB',
    armazenamento: '1TB',
    impressora: 'Epson',
    // Método para ligar o computador
    ligar: function () {
        console.log('Ligando o computador...');
        console.log('Marca:', this.marca);
        console.log('Modelo:', this.modelo);
        console.log('Processador:', this.processador);
        console.log('RAM:', this.ram);
        console.log('Armazenamento:', this.armazenamento);
        console.log('impressora', this.impressora);
    },
     // Método para imprimir
     imprimir: function () {
        console.log('Ligando o computador...');
        console.log('Marca:', this.marca);
        console.log('Modelo:', this.modelo);
        console.log('Processador:', this.processador);
        console.log('RAM:', this.ram);
        console.log('Armazenamento:', this.armazenamento);
        console.log('impressora imprimindo documento', this.impressora);
    },
    erro_ao_ligar: function () {
        console.log('Ligando o computador...erro ao ligar');
    },
    sla: function somar(val1, val2) {
        return val1 + val2;
    },

      // Exemplo de uso
    //   const resultado = somar(5, 7);
     // console.log('Resultado da soma:', resultado);

    
    // Função para divisão
    dividir: function (val1, val2) {
        if (val2 === 0) {
            return 'Divisão por zero não é permitida.';
        }
        return val1 / val2;
        console.log('Resultado da divisão por zero:', dividir(8, 0));
    },
}

function quebrarComponentes() {
    componente = prompt("Digite o equipamento quebrado?");
    computador[componente] = "quebrado";
    console.log(computador);
}

// exemplo

a = prompt();
b = prompt();
computador.dividir(a,b);
quebrarComponentes();


//exercício
let generos = Object.keys(computador);
console.log(generos);
//Recuperando os valores do objeto
let numeros = Object.values(computador);
console.log(numeros); //[4,93,10]

//kelysmoura.github.io/js-logic/#helloWorld

function helloWorld(argumento){
    if (argumento=== undefined){
        return"Hello World!"
else if(typeof argumento!== "string"){
    return"Função aceita string como argumento!"
}else{
    return "Hello " +argumento + "!";
}