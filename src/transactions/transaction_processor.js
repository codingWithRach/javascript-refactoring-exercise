function processTransactions(transactions) {
  const transactionCount = {};
  transactions
    .sort()
    .forEach((transaction) =>
      transactionCount[transaction]
        ? (transactionCount[transaction] += 1)
        : (transactionCount[transaction] = 1)
    );
  return Object.entries(transactionCount)
    .sort((a, b) => b[1] - a[1])
    .map((element) => element.join(" "));
}

module.exports = processTransactions;
