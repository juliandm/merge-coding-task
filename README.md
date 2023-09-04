# merge-coding-task

## Explanation

### Laufzeitkomplexität:

Die Laufzeit ist O(n \* log(n)), wobei n die Anzahl der Intervalle ist. DIe nodejs `Array.sort` Sortierfunktion ist der Hauptgrund dafür.

### Robustheit:

// TODO

### Speicherverbrauch:

Je mehr Intervalle es gibt, desto mehr Speicher wird benötigt. Die variable `mergedIntervals` ist hier relevant und wächst mit O(n).

## Test

Der Befehl `node test.js` führt den Code aus mit Grenzfällen.
