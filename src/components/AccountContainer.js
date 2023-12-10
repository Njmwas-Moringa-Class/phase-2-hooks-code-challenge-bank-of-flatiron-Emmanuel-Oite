import React from "react";

import AddTransactionForm from "./AddTransactionForm";
import TransactionsList from "./TransactionsList";

function AccountContainer() {
  return (
    <div>
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}

export default AccountContainer;
