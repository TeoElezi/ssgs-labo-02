# Labo-String: CLI per Utilità su Stringhe

Questo progetto fornisce una base per una semplice Command-Line Interface (CLI) Node.js che offre diverse utilità per la manipolazione di stringhe.


## Funzionalità Principali (Previste)

* Inversione di una stringa.
* Verifica se una stringa è palindroma.
* Troncamento di una stringa a una lunghezza massima specificata.
* Conteggio delle occorrenze di ciascun carattere in una stringa.



## Installazione
```bash
git clone https://github.com/TeoElezi/ssgs-labo-02.git
cd ssgs-labo-02
npm install
```
## Utilizzo
```bash
string-cli <comando> [argomenti]
```
Comandi disponibili:
- reverseString <stringa>          # Inverte una stringa
- isPalindrome <stringa>       # Verifica se è palindroma
- truncateString <stringa> <lung>  # Tronca alla lunghezza specificata
- countCharacters <stringa>            # Conta i caratteri

Esempio:
string-cli reverseString "Hello World"
✅ Test
```bash
npm test          # Esegui tutti i test
npm run test:coverage  # Test con report di copertura
```
🛠️ Struttura Progetto
/src
  /cli.js         # Interfaccia a linea di comando
  /stringUtils.js # Logica delle operazioni
/__tests__       # Test unitari
Commit:

## Installazione e Avvio

*(Questa sezione dovrà essere completata dallo studente come parte dell'Esercizio 1, includendo i comandi per installare le dipendenze ed eseguire l'applicazione e i test).*

---

*Suggerimento: Presta particolare attenzione ai requisiti dell'Esercizio 1 del laboratorio per completare e correggere questo README e gli altri file di configurazione.*