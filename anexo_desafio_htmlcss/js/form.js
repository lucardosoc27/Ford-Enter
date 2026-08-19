class Contato {
  constructor(nome, sobrenome, email, cpf, telefone, tipo, mensagem) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
    this.tipo = tipo;
    this.mensagem = mensagem;
  }
}

function MostrarDadosConsole(form) {
  console.log({
    nome: form.elements.namedItem("nome").value,
    sobrenome: form.elements.namedItem("sobrenome").value,
    email: form.elements.namedItem("email").value,
    cpf: form.elements.namedItem("cpf").value,
    telefone: form.elements.namedItem("telefone").value,
    tipo: form.elements.namedItem("tipo").value,
    mensagem: form.elements.namedItem("mensagem").value,
  });
}

function Post(form) {
  event.preventDefault();

  let data = new Contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("tipo").value,
    form.elements.namedItem("mensagem").value,
  );

  console.log(data);
  Enviar();
}

function VerificarConsentimento() {
  let aceiteTermos = document.getElementById("aceite-termos");
  let botaoEnviar = document.getElementById("btn-enviar");
  botaoEnviar.disabled = !aceiteTermos.checked;
}

function Enviar() {
  let nome = document.getElementById("nome");
  if (nome.value != "") {
    alert(
      `Obrigado sr(a) ${nome.value} os seus dados foram encaminhados com sucesso`,
    );
  }
}
