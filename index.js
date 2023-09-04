const MERGE = (intervals) => {
  if (!intervals.length) {
    return [];
  }

  // Sortiere die Intervalle nach ihrem Startwert
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    if (!intervals[i]) {
      console.log("intervals[i] is undefined");
      continue;
    }

    if (intervals[i].length !== 2) {
      console.log("intervals[i] has wrong length");
      continue;
    }

    const currentInterval = intervals[i];
    const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

    // Überprüfe, ob die aktuellen beiden Intervalle sich überlappen
    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
};

module.exports = MERGE;
