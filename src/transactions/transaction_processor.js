function processTransactions(transActions) {
  let txCount = {};
  transActions
    .sort()
    .forEach((transaction) =>
      txCount[transaction]
        ? (txCount[transaction] += 1)
        : (txCount[transaction] = 1)
    );
  return Object.entries(txCount)
    .sort((a, b) => b[1] - a[1])
    .map((element) => element.join(" "));
}

module.exports = processTransactions;
