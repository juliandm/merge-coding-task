# merge-coding-task

## Explanation

### Laufzeitkomplexität:

Die Laufzeit ist O(n \* log(n)), wobei n die Anzahl der Intervalle ist. DIe nodejs `Array.sort` Sortierfunktion ist der Hauptgrund dafür.

### Robustheit:

Der Code wird loggen wenn ein falscher wert im input ist aber nicht abbrechen. Das kann angepasst werden je nach belieben.

### Speicherverbrauch:

Je mehr Intervalle es gibt, desto mehr Speicher wird benötigt. Die variable `mergedIntervals` ist hier relevant und wächst mit O(n).

## Test

Der Befehl `node test.js` führt den Code aus mit Grenzfällen.
