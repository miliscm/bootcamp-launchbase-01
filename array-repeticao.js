const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
];

for (usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias}`);
}

function checaSeUsuarioUsaCSS(usuario) {
  for (usuario.tecnologia of usuario.tecnologias) {
    if (usuario.tecnologia === "CSS") {
      return true;
    }
  }
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}
