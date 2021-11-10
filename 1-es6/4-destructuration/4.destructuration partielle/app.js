const moi = {
  nom: "lisangola",
  prenom: "christian",
  pays: "France",
  email: "christian.lisangola@gmail.com",
};

const { pays, email, ...noms } = moi;
console.log(noms);
