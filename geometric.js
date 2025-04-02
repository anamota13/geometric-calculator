const readline = require('readline');

class FormaGeometrica {
  constructor(nome) {
    this.nome = nome;
  }

  mostrarResultados() {
    console.log(`\nResultados para ${this.nome}:`);
    console.log(`Área: ${this.calcularArea()}`);
    console.log(`Perímetro: ${this.calcularPerimetro()}`);
  }
}

class Retangulo extends FormaGeometrica {
  constructor(largura, altura) {
    super('Retângulo');
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    return this.largura * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}

class Circulo extends FormaGeometrica {
  constructor(raio) {
    super('Círculo');
    this.raio = raio;
  }

  calcularArea() {
    return Math.PI * Math.pow(this.raio, 2);
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.raio;
  }
}

class Triangulo extends FormaGeometrica {
  constructor(base, altura, lado1, lado2, lado3) {
    super('Triângulo');
    this.base = base;
    this.altura = altura;
    this.lados = [lado1, lado2, lado3];
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }

  calcularPerimetro() {
    return this.lados.reduce((a, b) => a + b, 0);
  }
}

class CalculadoraGeometrica {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  iniciar() {
    console.log('=== CALCULADORA GEOMÉTRICA ===');
    this.mostrarMenu();
  }

  mostrarMenu() {
    console.log('\nEscolha uma forma:');
    console.log('1. Retângulo');
    console.log('2. Círculo');
    console.log('3. Triângulo');
    console.log('4. Sair');

    this.rl.question('Opção: ', (opcao) => {
      switch(opcao) {
        case '1': this.criarRetangulo(); break;
        case '2': this.criarCirculo(); break;
        case '3': this.criarTriangulo(); break;
        case '4': this.sair(); break;
        default: this.opcaoInvalida();
      }
    });
  }

  criarRetangulo() {
    this.rl.question('Largura: ', (largura) => {
      this.rl.question('Altura: ', (altura) => {
        const forma = new Retangulo(parseFloat(largura), parseFloat(altura));
        forma.mostrarResultados();
        this.mostrarMenu();
      });
    });
  }

  criarCirculo() {
    this.rl.question('Raio: ', (raio) => {
      const forma = new Circulo(parseFloat(raio));
      forma.mostrarResultados();
      this.mostrarMenu();
    });
  }

  criarTriangulo() {
    this.rl.question('Base: ', (base) => {
      this.rl.question('Altura: ', (altura) => {
        this.rl.question('Lado 1: ', (lado1) => {
          this.rl.question('Lado 2: ', (lado2) => {
            this.rl.question('Lado 3: ', (lado3) => {
              const forma = new Triangulo(
                parseFloat(base),
                parseFloat(altura),
                parseFloat(lado1),
                parseFloat(lado2),
                parseFloat(lado3)
              );
              forma.mostrarResultados();
              this.mostrarMenu();
            });
          });
        });
      });
    });
  }

  opcaoInvalida() {
    console.log('Opção inválida! Tente novamente.');
    this.mostrarMenu();
  }

  sair() {
    console.log('Até logo!');
    this.rl.close();
  }
}

const calculadora = new CalculadoraGeometrica();
calculadora.iniciar();