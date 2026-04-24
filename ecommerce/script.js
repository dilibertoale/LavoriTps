function valida() {
  let ok = true;

  const nome = document.getElementById("nome").value.trim();
  const cognome = document.getElementById("cognome").value.trim();
  const cap = document.getElementById("cap").value.trim();
  const email = document.getElementById("email").value.trim();
  const cf = document.getElementById("cf").value.trim().toUpperCase();

  const regNome = /^[a-zA-Z\s]{2,}$/;
  const regCap = /^\d{5}$/;
  const regEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regCF = /^[A-Z0-9]{16}$/;

  // NOME
  if (regNome.test(nome)) {
    document.getElementById("err_nome").textContent = "";
  } else {
    document.getElementById("err_nome").textContent = "Nome non valido";
    ok = false;
  }

  // COGNOME
  if (regNome.test(cognome)) {
    document.getElementById("err_cognome").textContent = "";
  } else {
    document.getElementById("err_cognome").textContent = "Cognome non valido";
    ok = false;
  }

  // CAP
  if (regCap.test(cap)) {
    document.getElementById("err_cap").textContent = "";
  } else {
    document.getElementById("err_cap").textContent = "CAP errato";
    ok = false;
  }

  // EMAIL
  if (regEmail.test(email)) {
    document.getElementById("err_email").textContent = "";
  } else {
    document.getElementById("err_email").textContent = "Email errata";
    ok = false;
  }

  

  if (ok) {
    salva(nome, cognome, cap, email, cf);
  }
}
