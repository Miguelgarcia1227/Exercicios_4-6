//-------------------EXERCICIO 4-------------------//

// Função para criar um baralho

// function criarBaralho() {
//     const naipes = ['Copas', 'Espadas', 'Ouros', 'Paus'];
//     const valores = ['Ás', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valete', 'Dama', 'Rei'];
//     const baralho = [];

//     for (const naipe of naipes) {
//       for (const valor of valores) {
//         baralho.push(`${valor} de ${naipe}`);
//       }
//     }

//     return baralho;
//   }

//   // Função para embaralhar um array

//   function embaralharArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }

//   // Função para distribuir cartas para os jogadores

//   function distribuirCartas(jogadores, baralho, numCartas) {
//     const maos = {};

//     for (const jogador of jogadores) {
//       maos[jogador] = [];
//       for (let i = 0; i < numCartas; i++) {
//         maos[jogador].push(baralho.pop());
//       }
//     }

//     return maos;
//   }

//   // Jogadores e número de cartas

//   const jogadores = ['Pedro', 'Amigo1', 'Amigo2', 'Amigo3'];
//   const numCartasPorJogador = 5;

//   // Criar o baralho e embaralhar

//   const baralho = criarBaralho();
//   embaralharArray(baralho);

//   // Distribuir as cartas

//   const maosDosJogadores = distribuirCartas(jogadores, baralho, numCartasPorJogador);

//   // Exibir as mãos dos jogadores

//   for (const jogador in maosDosJogadores) {
//    alert(`${jogador}: ${maosDosJogadores[jogador].join(', ')}`);
//   }

//-------------------------------------------------//



//-------------------EXERCICIO 5-------------------//

// < !DOCTYPE html >
//     <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                     <title>Exercicio 5</title>
//                 </head>
//                 <body>

//                     <script>

//                         let tarefas = [];

//                         function adicionarTarefas() {
//                             let materia = prompt('Coloque a matéria desta atividade.');
//                         let tarefa = prompt('Coloque qual tarefa precisa ser feita.');
//                         let dataEntrega = prompt('Coloque qual será a data de entrega.');
//                         let soma = materia + " - " + tarefa + " - " + dataEntrega;

//                         tarefas.push(soma)
//                         alert("tarefa: '" + tarefa + "' adicionada na lista.");

//     }

//                         function exibirTarefas() {
//         if (tarefas.length === 0) {
//                             alert('Você não tem nenhuma tarefa para fazer hoje; Vai jogar bola.');
//                         return;
//         }

//                         let todasAsTarefas = "Tarefas para hoje:\n";
//                         tarefas.forEach(function(item, index) {
//                             todasAsTarefas += index + ": " + item + "\n"
//                         });

//                         alert(todasAsTarefas);
//     }

//                         while (true) {
//                             let opcao = prompt('Escolha a sua opção:\n1.Adicionar uma tarefa.\n2.mostrar todas as tarefas.\n3.sair.');

//                         switch (opcao) {
//             case "1":
//                         adicionarTarefas();
//                         break;
//                         case "2":
//                         exibirTarefas();
//                         break;
//                         case "3":
//                         alert('Saindo do programa!!!');
//                         exite(0);
//                         break;
//                         default:
//                         alert('Opção invalida.');
//          }
//        }

//                     </script>

//                 </body>
//             </html>





// //-------------------------------------------------//


//             //-------------------EXERCICIO 6-------------------//

            // {/* <html>

/* <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="exercicios1.css">

</head>

<body>

  <script>
let valores = [];
let soma = 0;

function verExtrato() {
  if (valores === 0) {
    alert('A lista está vazia');
    return;
  };
  let extrato = 'Valores gastos: \n';
  valores.forEach(function (item, index) {
    extrato += index + "º: " + item + "\n";
  }); 

  alert(extrato)
}

function AdicionarGasto() {
  let inputQuantia = parseInt(prompt('Digite a quantia gasta'));
  if (isNaN(inputQuantia) || inputQuantia === '' || inputQuantia <= 0) {
    alert('Algo deu errado, tente novamente');
    return;
  } else {
    valores.push(inputQuantia);
    alert('A quantia de ' + inputQuantia + ' foi adicionada com sucesso!');
    soma+=inputQuantia;
  }

}

while (true) {
  const opção = prompt('O que você deseja?' + "\n" + '1. Adicionar Gasto' + "\n" + '2. Ver extrato' + "\n" + '3. Ver total' + "\n" + '4. Sair');
  switch (opção) {
    case ('1'):
      AdicionarGasto();
      break;
    case ('2'):
      verExtrato();
      break;
      case('3'):
      alert(soma);
      break;
    case ('4'):      
      alert("Saindo do programa.");
      exit(0);
    default:
      alert("Opção inválida.");
  }
};
  </script>

</body>

</html>
//-------------------------------------------------// */}

//  */}

