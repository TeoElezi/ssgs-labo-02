# Labo-String: CLI per Utilità su Stringhe 🧵

CLI avanzata per operazioni su stringhe con test automatizzati e integrazione continua.

## Indice
- [Funzionalità](#-funzionalità)
- [Installazione](#-installazione)
- [Utilizzo](#-utilizzo)
- [Test](#-test)
- [Struttura del Progetto](#-struttura-del-progetto)

## 🚀 Funzionalità
- ↕️ **Inversione stringhe** - Capovolgi qualsiasi stringa
- 🔄 **Rilevazione palindromi** - Identifica parole/frasi palindrome
- ✂️ **Troncamento intelligente** - Riduci lunghezza con gestione elegante
- 🔢 **Analisi caratteri** - Conteggio dettagliato occorrenze

## 📦 Installazione
```bash
git clone https://github.com/TeoElezi/ssgs-labo-02.git
cd ssgs-labo-02
npm install
```

## 💻 Utilizzo
```bash
npm start

node ./src/cli <numero_funzione> <stringa_input> [parametro_aggiuntivo]
```
Comandi disponibili:
  reverseString <stringa>          Inverti una stringa
  isPalindrome <stringa>       Verifica se è palindroma
  truncateString <stringa> <lung>  Tronca alla lunghezza specificata
  countCharacters <stringa>            Conta i caratteri

Esempi:
```bash
node ./src/cli 1 "Hello World"
# Output: "dlroW olleH"

$ string-cli 2 "Anna"
# Output: true

$ string-cli 3 "Lorem ipsum" 5
# Output: "Lorem..."

$ string-cli 4 "hello"
# Output: { h: 1, e: 1, l: 2, o: 1 }
```

## ✅ Test
```bash
npm test  # Esegui tutti i test con report di copertura

# Output atteso:
# --------------------|---------|----------|---------|---------|-------------------
# File                |  % Stmts| % Branch |  % Funcs|  % Lines| Uncovered Line #s 
# --------------------|---------|----------|---------|---------|-------------------
# Tutti i file        |     100 |      100 |     100 |     100 |
```

## 🏗️ Struttura del Progetto
```
/
├── src/
│   ├── cli.js             # Interfaccia a linea di comando
│   └── stringUtils.js     # Logica delle operazioni
├── __tests__/
│   └── stringUtils.test.js # Test suite
├── .gitignore
├── package.json
└── README.md
```

---

👤 **Autore**: Matteo Elezi  
📧 **Contatto**: 5283664@studenti.unige.it  
🐛 **Segnalazione Bug**: [GitHub Issues](https://github.com/TeoElezi/ssgs-labo-02/issues)