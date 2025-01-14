function processTransactions(transactions) {
  const transactionCount = {};
  const incrementCount = (transaction) =>
    transactionCount[transaction]
      ? (transactionCount[transaction] += 1)
      : (transactionCount[transaction] = 1);
  transactions.sort().forEach((transaction) => incrementCount(transaction));
  return Object.entries(transactionCount)
    .sort((a, b) => b[1] - a[1])
    .map((element) => element.join(" "));
}

module.exports = processTransactions;
