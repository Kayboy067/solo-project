import React from 'react';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is





function InfoPage() {

  const receivers = useSelector(store=>store.receiverReducer[0])
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'FETCH_RECEIVER'})
  }, [])

console.log('this are the receivers from the store', receivers);

  return (
    <div className="container">
      <p>Info Page</p>
      <p> I want to know the details of my receiver</p>
      {/* <p>{receivers.first_name}</p> */}
    </div>
  );
}

export default InfoPage;
