const programador = {
  nome: "Milena",
  idade: 37,
  tecnologias: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" },
  ],
};
console.log(
  `O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com a especialidade em ${programador.tecnologias[0].especialidade}`,
);
