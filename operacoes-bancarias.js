const user = {
  name: "Mariana",
  transactions: [],
  balance: 0,
};

function createTransaction(transaction) {
  if (transaction.type == "credit") {
    user.transactions.push(transaction);
    user.balance = user.balance + transaction.value;
  } else {
    user.transactions.push(transaction);
    user.balance = user.balance - transaction.value;
  }
}

function getAverageTransactionValue() {
  let avarege = 0;
  for (transaction of user.transactions) {
    avarege += transaction.value;
  }
  return avarege / user.transactions.length;
}

function getTransactionsCount() {
  user.transactionsCount = { credit: 0, debit: 0 };
  let i = 0;
  let u = 0;
  for (transaction of user.transactions) {
    if (transaction.type === "credit") {
      i = i + 1;
      user.transactionsCount.credit = i;
    } else {
      u = u + 1;
      user.transactionsCount.debit = u;
    }
  }
  return user.transactionsCount;
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });
createTransaction({ type: "debit", value: 30 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });

console.log(user.balance);

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
