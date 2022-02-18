import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import './TransactionHistory.css'

function TransactionHistory(props) {

    const transaction = useSelector(store => store.transactionListReducer);
    //const receiver = useSelector(store => store.paymentOptionReducer);
    const dispatch = useDispatch();
    const [change,setChange] = useState(false);

    // call that function in useEffect with empty 

    useEffect(() => {

        dispatch({ type: 'GET_TRANSACTIONS' });
        
        
    }, [change])

    const deleteBtn = (id) => {
        console.log('here is id',id);

        dispatch({ type: 'GET_TRANSACTIONS'});
        dispatch({ type: 'DELETE_TRANSACTION', payload:{id:id}  });


        setChange(prev=>!prev);

    }

    return (

        <div>

            <Container className='white-container-transfer' maxWidth="xl">
                <center>
                <p className='transfer-list'>Transfer List</p>
                </center>
                { transaction.map((transaction, index) => {

                    return (
                        <Container key={index} style={{marginBottom:20}}>

                            <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>
                                <Grid justifyContent="around" className='transfer-status-grid' container spacing={2}>

                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Transaction Date:</h4>
                                        <p className='transfer-text'>{transaction.date}</p>
                                    </Grid> 

                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Receiver Name:</h4>
                                        <p className='transfer-text'>{transaction.first_name + " " + transaction.last_name}</p>
                                    </Grid>

                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Receive Method:</h4>
                                        <p className='transfer-text'>Cash Pick</p>
                                    </Grid>

                                    <Grid item xs={12} sm={6} >
                                        <h4 className='transfer-header'>Sent Amount:</h4>
                                        <p className='transfer-text'>{transaction.amount} USD</p>
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