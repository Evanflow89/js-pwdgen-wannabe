// Chiedi all’utente il suo nome

const userName = prompt("Inserisci il tuo nome");

// poi chiedi il suo cognome

const lastName = prompt("Bene, ora inserisci il tuo cognome")


// poi chiedi il suo colore preferito

const favColor = prompt("Ci siamo quasi! Dicci il tuo colore preferito")

// Infine scrivi sulla pagina nomecognomecolorepreferito21


document.getElementById("passwordGen").innerHTML = userName + lastName + favColor + 21;