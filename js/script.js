// 1.0 Chiedo il nome all'utente
var nome = prompt("Qual è il tuo nome?");
// 1.1 Chiedo il cognome all'utente
var cognome = prompt("Qual è il tuo cognome?");
// 1.2 Chiedo il colore preferito all'utente
var colore = prompt("Qual è il tuo colore preferito?");

// 2. Generazione mediante concatenazione
var password = nome + cognome + colore + "19";

// 3. Stampo a video il risultato
document.getElementById('password').innerHTML = password;


// se l'utente dovesse inserire anche il numero, ecco soluzione alternativa:
//
// var numero = prompt("Qual è il tuo numero preferito?");
// var password = nome + cognome + colore + numero;
