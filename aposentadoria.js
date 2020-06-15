//calculo fictício da aposentaria

const nome = "Silvana";
const sexo = "F";
const idade = 60;
const contribuicao = 23;

// homens 35 e mulheres 30
// idade + tempo

if (sexo === "F") {
  const tempoContr = 30 + idade;
  if (tempoContr >= 85) {
    console.log(`${nome},você pode se aposentar`);
  } else {
    console.log(`${nome},você não pode se aposentar`);
  }
} else {
  const tempoContr = 35 + idade;
  if (tempoContr >= 95) {
    console.log(`${nome},você pode se aposentar`);
  } else {
    console.log(`${nome},você não pode se aposentar`);
  }
}
