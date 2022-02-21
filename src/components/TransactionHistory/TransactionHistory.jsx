import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function TransactionHistory(props) {

    const transaction = useSelector(store => store.transactionListReducer);
    const receiver = useSelector(store => store.receiverReducer);
    const dispatch = useDispatch();
    //const [change,setChange] = useState(false);

    console.log('this is the receiver from the store', receiver);

    // call that function in useEffect with empty 

    useEffect(() => {

        dispatch({ type: 'GET_TRANSACTIONS' });
        
        
    }, [])

    const deleteBtn = (id) => {
        console.log('here is id',id);

        dispatch({ type: 'GET_TRANSACTIONS'});
        dispatch({ type: 'DELETE_TRANSACTION', payload:{id:id}  });


        //setChange(prev=>!prev);

    }

    return (

        <div>

            <Container maxWidth="xl">
                <center>
                <h3>Transfer List</h3>
                </center>
                { transaction.map((transaction, index) => {

                    return (
                        <Container key={index} style={{marginBottom:20}}>

                            <Grid justifyContent="around" container spacing={2}>
                                <Grid justifyContent="around" container spacing={2}>

                                    <Grid item xs={12} sm={6} >
                                        <h4>Transaction Date:</h4>
                                        <p >{transaction.date.toString().slice(0,10)}</p>
                                    </Grid> 

                                    <Grid item xs={12} sm={6} >
                                        <h4>Receiver Name:</h4>
                                        <p>{receiver.first_name + " " + receiver.last_name}</p>
                                    </Grid>

                                    <Grid item xs={12} sm={6} >
                                        <h4>Receive Method:</h4>
                                        <p>Cash Pick</p>
                                    </Grid>

                                    <Grid item xs={12} sm={6} >
                                        <h4>Sent Amount:</h4>
                                        <p>{transaction.amount} USD</p>
                                    </Grid>
   
                                </Grid>
                                
                                <button className='btn' onClick={()=> deleteBtn(transaction.id)} >Delete</button>
                                
                            </Grid>
                        </Container>
                    )
                }) }


            </Container>

        </div>


    );
}

export default TransactionHistory;