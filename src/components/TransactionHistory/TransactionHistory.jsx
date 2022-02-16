import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is





function TransactionHistory() {

  const receivers = useSelector(store=>store.receiverReducer[0])
  const dispatch = useDispatch();
  const transaction = useSelector(store => store.transactionReducer)
  const paymentOption = useSelector(store => store.paymentOptionReducer)

  // useEffect(() => {
  //   dispatch({type: 'FETCH_RECEIVER'})
  // }, [])

console.log('this are the receivers from the store', receivers);
console.log('transaction details from redux', transaction);
console.log('this is the payment option from redux', paymentOption);

  return (
    <div className="container">
      <p>Info Page</p>
      <p> I want to know the details of my receiver</p>
      {/* <p>{receivers.first_name}</p> */}
      <button> check transaction</button>
      <h3>{transaction.amount}</h3>
      <h3>{transaction.convertedAmount}</h3>
      <h3>{transaction.rate}</h3>
      <h3>{transaction.country}</h3>
      <h3>{receivers.id}</h3>
    </div>
  );
}

export default TransactionHistory;
