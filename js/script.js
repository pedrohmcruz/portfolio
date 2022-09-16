const firebaseConfig = {
  apiKey: "AIzaSyA7Xh6KSF2vV_Pxb-IPHECbmhyd26R82cc",
  authDomain: "portifoliopedrocruz-ec4e8.firebaseapp.com",
  projectId: "portifoliopedrocruz-ec4e8",
  storageBucket: "portifoliopedrocruz-ec4e8.appspot.com",
  messagingSenderId: "895808540239",
  appId: "1:895808540239:web:fd728c3e4d67e9734ee43a"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();

function receberDados() {
  let db = firebase.firestore();
  let nome = document.getElementById("nome-input").value;
  let email = document.getElementById("email-input").value;
  let assunto = document.getElementById("assunto-input").value;
  let mensagem = document.getElementById("mensagem-input").value;
  let hora = new Date;
  let minutos = new Date;

  if (nome && email && assunto && mensagem != "") {
    db.collection("mensagensRecebidas").add({
      nome: nome,
      email: email,
      assunto: assunto,
      mensagem: mensagem,
      horario: (hora.getHours()) + ":" + (minutos.getMinutes()),
    })
    .then(() => {
      aparecerModal();
    })
    .catch((err) => {
      console.log(err)
    })
  }
}

const menuItens = document.querySelectorAll("nav a");
menuItens.forEach((item) => {
  item.addEventListener("click", scrollMenu)
})

function scrollMenu(evento) {
  evento.preventDefault();
  const elemento = evento.target;
  const id = elemento.getAttribute("href");
  const destino = document.querySelector(id).offsetTop;

  window.scroll({
    top: destino - 20,
    behavior: "smooth",
  });
}

let modal = document.querySelector(".modal-container");
let modalFilho = document.querySelector(".modal-filho");

function sumirModal() {
  modal.classList.remove("modal-container-tela");
}

function aparecerModal() {
  modal.classList.add("modal-container-tela");
}

modal.addEventListener("click", (evento) => {
  if (modalFilho.contains(evento.target)) return;
  else {
    sumirModal();
  }
})
