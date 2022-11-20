let nome = prompt('Inesrisci il tuo nome');
console.log(nome);
let cognome = prompt('Inesrisci il tuo cognome');
console.log(cognome);
let numero = prompt('Inesrisci il tuo numero preferito');
console.log(numero);
let password = nome + cognome + numero;
console.log(password);

document.getElementById('testo').innerHTML = "La Password generata è: " + password;
console.log(password);